import './App.css';
import Header from "./components/Header";
import RegistrationInput from "./components/RegistrationInput"
import RegisteredProviders from "./components/RegisteredProviders";
import { useState } from "react";

const App = () => {
    const [registeredProviders, setRegisteredProviders] = useState([]);

    const removeProvider = (index) => {
        const newProviders = [...registeredProviders];
        newProviders.splice(index, 1);
        setRegisteredProviders(newProviders);
    };

    const addProvider = (data) => setRegisteredProviders([...registeredProviders, data]);

    return (
        <div className="App">
            <Header/>
            <RegistrationInput sendData={addProvider}/>
            <RegisteredProviders data={registeredProviders} removeProvider={removeProvider}/>
        </div>
    );
}

export default App;
