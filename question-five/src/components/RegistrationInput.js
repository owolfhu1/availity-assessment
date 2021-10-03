import { useState } from "react";

const RegistrationInput = ({ sendData }) => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [npi, setNpi] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const clearInputs = () => {
        setFirst('');
        setLast('');
        setNpi('');
        setAddress('');
        setPhone('');
        setEmail('');
    };

    const register = () => {
        sendData({ first, last, npi, address, phone, email });
        clearInputs();
    };

    return (
        <div className='section-wrapper'>
            <h2 className='center'>Provider Registration</h2>
            <div className='flex-row'>
                <div>
                    <h4>First Name</h4>
                    <input value={first} onChange={event => setFirst(event.target.value)} type="text"/>
                </div>
                <div>
                    <h4>Last Name</h4>
                    <input value={last} onChange={event => setLast(event.target.value)} type="text"/>
                </div>
                <div>
                    <h4>NPI Number</h4>
                    <input value={npi} onChange={event => setNpi(event.target.value)} type="text"/>
                </div>
            </div>

            <div className='flex-row'>
                <div>
                    <h4>Business Address</h4>
                    <input value={address} onChange={event => setAddress(event.target.value)} type="text"/>
                </div>
                <div>
                    <h4>Telephone Number</h4>
                    <input value={phone} onChange={event => setPhone(event.target.value)} type="text"/>
                </div>
                <div>
                    <h4>Email Address</h4>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="text"/>
                </div>
            </div>

            <div className='flex-row pad-above'>
                <div/>
                <div>
                    <button
                        className='green'
                        onClick={register}
                        disabled={!first || !last || !npi || !address || !phone || !email}>
                        register
                    </button>
                    <button
                        className='red'
                        onClick={clearInputs}
                        disabled={!(first || last || npi || address || phone || email)}>
                        clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationInput;
