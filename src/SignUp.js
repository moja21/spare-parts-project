import React, { useState } from 'react';

const SignUp = () => {
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [registeredUser, setRegisteredUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
      phone_number: phoneNumber
    };

    try {
      const response = await fetch('https://spare-parts-php.herokuapp.com/signup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // Registration successful
        setResponseMessage(data.message);
        setRegisteredUser(data.username);
        setRegisteredUser(data.email);
        setRegisteredUser(data.password);
        setRegisteredUser(data.phone_number);
      } else {
        // Registration failed
        setResponseMessage(data.message);
        setRegisteredUser(null);
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred while registering the user.');
      setRegisteredUser(null);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">User Registration</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            required
          />
          <button className="submit-button" type="submit">
            Register
          </button>
        </div>
      </form>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
      {registeredUser && (
        <div className="registered-user">
          <h2>Registered User Details:</h2>
          <p>ID: {registeredUser.id}</p>
          <p>Username: {registeredUser.username}</p>
          <p>Email: {registeredUser.email}</p>
          <p>Phone Number: {registeredUser.phone_number}</p>
        </div>
      )}
    </div>
  );
};
  
export default SignUp;