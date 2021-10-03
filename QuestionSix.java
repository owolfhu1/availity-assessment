import java.util.*;
import java.io.*;

class QuestionSix {
    // { [company name] : List of company users }
    private static HashMap<String, List<User>> insuranceCompanies = new HashMap<String, List<User>>();

    public static void main(String[] args) {
        readFile(args[0]);
        // create new file for each company
        for (String key : insuranceCompanies.keySet()) {
            createCompanyFile(key);
        }
    }

    private static void createCompanyFile(String key) {
        List<User> companyUsers = insuranceCompanies.get(key);

        // sort users by last name else first name if last names are the same
        companyUsers.sort((a, b) -> {
            if (a.getLastName().equals(b.getLastName())) {
                return a.getFirstName().compareToIgnoreCase(b.getFirstName());
            } else {
                return a.getLastName().compareToIgnoreCase(b.getLastName());
            }
        });

        // create the company file and populate it with user data
        try {
            File outputFile = new File("questionSixOutput/" + key + ".csv");
            if (outputFile.createNewFile()) {
                FileWriter outputFileWriter = new FileWriter("questionSixOutput/" + key + ".csv");
                for (User user : companyUsers) {
                    outputFileWriter.write(user + "\n");
                }
                outputFileWriter.close();
            } else {
                System.out.println("File already created.");
            }
        } catch (Exception e) {
            System.out.println("An error occurred.");
        }
    }

    private static void readFile(String fileName) {
        try {
            BufferedReader br = new BufferedReader(new FileReader("questionSixInput/" + fileName));
            String line = br.readLine();

            // while we still have user rows
            while (line != null) {
                // break the csv line into data and create a user
                String[] lineArray = line.split(",");
                User user = new User(lineArray);

                // if records already exist for the insurance company
                if (insuranceCompanies.containsKey(lineArray[4])) {

                    // get that company's data
                    List<User> companyUsers = insuranceCompanies.get(lineArray[4]);

                    // check if the userId exists and swap it with new user if the new version is greater
                    boolean swappedUser = false;
                    for (int i = 0; i < companyUsers.size(); i++) {
                        User oldUser = companyUsers.get(i);
                        if (
                            oldUser.getUserId().equals(user.getUserId()) &&
                            oldUser.getVersion() <= user.getVersion()
                        ) {
                            companyUsers.set(i, user);
                            swappedUser = true;
                        }
                    }

                    // if user didnt exist, add it to the company
                    if (!swappedUser) {
                        companyUsers.add(user);
                    }
                } else {
                    // if records didn't exist for the insurance company, create it and add the user
                    List<User> users = new ArrayList<User>();
                    users.add(user);
                    insuranceCompanies.put(lineArray[4], users);
                }

                // get next row, repeat till no more rows
                line = br.readLine();
            }
            System.out.println("Finished reading " + fileName);
        } catch (Exception err) {
            System.out.println("There was an error scanning " + fileName + ". " +
                    "Please make sure you entered the correct file name and try again.");
        }
    }
}

class User {
    private String firstName, lastName, userId;
    private int version;

    public User(String[] line) {
        firstName = line[1];
        lastName = line[2];
        userId = line[0];
        version = Integer.parseInt(line[3]);
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getUserId() {
        return userId;
    }

    public int getVersion() {
        return version;
    }

    // override user string to be csv format to easily create new csv files
    @Override
    public String toString() {
        return userId + "," + firstName + "," + lastName + "," + version;
    }
}
