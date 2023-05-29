import React, { useState } from 'react';
import { BrowserRouter as  Route} from 'react-router-dom';
import SignUp from './SignUp';
import { useHistory } from 'react-router-dom';
const AccountSettings = () => {
  const [registered, setRegistered] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const handleSignUp = () => {
    history.push('/signup');
    
  };

  const handleLogin = () => {
    history.push('/login');
  };

  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <div className="account-settings">
      {!registered && !loggedIn && (
        <div>
          <button onClick={handleSignUp}>Sign Up</button>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {registered && loggedIn && (
        <div>
          {/* Show account settings data */}
          <h2>Account Settings</h2>
          {/* Display user information */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default AccountSettings;