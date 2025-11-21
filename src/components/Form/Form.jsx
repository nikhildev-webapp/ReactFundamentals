import React, { useState } from 'react';

const FormContainer = {
    border: '1px solid #ccc', // Changed border for better visibility
    padding: '25px',
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Added a subtle shadow
    minWidth: '300px'
};

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    // State to hold validation errors for each field
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!firstName.trim()) {
            formErrors.firstName = 'First Name is required';
            isValid = false;
        }
        if (!lastName.trim()) {
            formErrors.lastName = 'Last Name is required';
            isValid = false;
        }
        if (!phoneNo.trim()) {
            formErrors.phoneNo = 'Phone Number is required';
            isValid = false;
        }
        if (!email.trim()) {
            formErrors.email = 'Email is required';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Corrected typo

        if (validateForm()) {
            // If validation passes, show a success message or submit data
            alert('Form submitted successfully!');
            // You can also perform an API call here to submit the form data
            console.log('Submitting Data:', { firstName, lastName, phoneNo, email });
        } else {
            // If validation fails, errors state is updated and messages will render
            alert('Please fill in all required fields.'); // Alert message as requested
        }
    };

    const inputStyle = {
        display: 'block',
        width: '100%',
        padding: '8px',
        margin: '5px 0 10px 0',
        boxSizing: 'border-box'
    };

    const errorStyle = {
        color: 'red',
        fontSize: '12px',
        marginBottom: '10px',
        display: 'block'
    };

    return (
        <>
            <div style={FormContainer}>
                <h1 style={{ textAlign: "center", fontWeight: 'bold' }}>Signup Form</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">FirstName:</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder='Enter your FirstName'
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                            style={inputStyle}
                        />
                        {errors.firstName && <span style={errorStyle}>{errors.firstName}</span>}
                    </div>
                    <div>
                        <label htmlFor="lastName">LastName: </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder='Enter your LastName'
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                            style={inputStyle}
                        />
                        {errors.lastName && <span style={errorStyle}>{errors.lastName}</span>}
                    </div>
                    <div>
                        <label htmlFor="phoneNo">PhoneNo:</label>
                        <input
                            type="tel"
                            name="phoneNo"
                            id="phoneNo"
                            placeholder='Enter your PhoneNumber'
                            value={phoneNo}
                            onChange={(event) => setPhoneNo(event.target.value)}
                            style={inputStyle}
                        />
                        {errors.phoneNo && <span style={errorStyle}>{errors.phoneNo}</span>}
                    </div>
                    <div>
                        <label htmlFor="Email">Email:</label>
                        <input
                            type="email"
                            name="Email"
                            id="Email"
                            placeholder='Enter your Email'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            style={inputStyle}
                        />
                        {errors.email && <span style={errorStyle}>{errors.email}</span>}
                    </div>
                    <button
                        type='submit'
                        style={{
                            margin: '10px 0',
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Signup
                    </button>
                </form>
            </div>
        </>
    );
};

export default Form;
