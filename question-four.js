
// question solution
const parenthesesChecker = inputString => {
    // remove outside whitespace
    inputString = inputString.trim();

    // check for empty strings
    if (!inputString.length) {
        return false;
    }

    // holds a stack of opened parentheses
    const stack = [];

    for (let i = 0;  i < inputString.length; i++) {
        // check that we are still nested unless first char
        if (i && !stack.length) {
            return false;
        }
        const char = inputString[i];
        if (char === '(') {
            // push opening parentheses onto the stack
            stack.push(char);
        } else {
            if (!stack.length) {
                // non parentheses char not between parentheses
                return false;
            }

            if (char === ')') {
                // pop out the last opening parentheses
                stack.pop();
            }
        }
    }

    // if stack is empty all parentheses have been closed and true is returned, else false is returned
    return !stack.length;
};

// some data to test functionality
const testData = [
    { input: '  ()   ', expectation: true },
    { input: ')car(', expectation: false },
    { input: '(foo (bar))', expectation: true },
    { input: '(()', expectation: false },
    { input: '(bar)(baz)', expectation: false },
    { input: '((foo) biz))', expectation: false },
    { input: '(biz (baz foo) bar)', expectation: true }
]

let failCount = 0;

// run test
testData.forEach(data => {
    const { input, expectation } = data;
    console.log(`input: ${input}`)
    console.log(`expectation: ${expectation}`)
    console.log(`actual: ${parenthesesChecker(input)}`)
    console.log(`result: ${parenthesesChecker(input) === expectation ? 'pass' : 'fail'}`);
    if (parenthesesChecker(input) !== expectation) {
        failCount++;
    }
    console.log('-------------------------')
})

console.log('OVERALL RESULTS: ')
console.log(failCount ? `${failCount} tests failed` : 'all tests passed');
