const RegisteredProviders = ({ data, removeProvider }) => {
    return (
        <div className='section-wrapper'>
            <h2 className='center'>Registered Providers</h2>
            <div className='provider-wrapper'>
                {data.length ? data.map((obj, index) =>
                    <div key={index} className='provider-output'>
                        <div className='flex-row'>
                            <h2>{obj.first} {obj.last}</h2>
                            <button className='red' onClick={() => removeProvider(index)}>X</button>
                        </div>

                        <div>
                            <h4>Business Address</h4>
                            {obj.address}
                        </div>

                        <div className='flex-row'>
                            <div>
                                <h4>NPI Number</h4>
                                {obj.npi}
                            </div>
                            <div>
                                <h4>Telephone Number</h4>
                                {obj.phone}
                            </div>
                            <div>
                                <h4>Email Address</h4>
                                {obj.email}
                            </div>
                        </div>
                    </div>
                ) : <h4 className='center'>No Providers have been added</h4>}
            </div>
        </div>
    );
};

export default RegisteredProviders;
