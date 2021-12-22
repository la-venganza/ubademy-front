import React, { useState, useEffect } from 'react';
import { configureAxiosHeaders } from '../utils/httpClient';

// Create a context
const AuthContext = React.createContext({});
const defaultData = JSON.stringify({
  token: '',
});

const AuthProvider = ({ children }) => {
  const [auth, setAuthState] = useState({
    token: '',
  });

  // Get current auth state from AsyncStorage
  const getAuthState = async () => {
    try {
      const authDataString = window.localStorage.getItem('auth');
      const authData = JSON.parse(authDataString || defaultData);
      const { token } = authData;
      // Configure axios headers
      configureAxiosHeaders(token);
      setAuth(token);
    } catch (err) {
      setAuthState({
        token: '',
      });
    }
  };

  // Update AsyncStorage & context state
  const setAuth = async (token) => {
    try {
      window.localStorage.setItem('auth', JSON.stringify({
        token,
      }));
      // Configure axios headers
      configureAxiosHeaders(token);
      setAuthState({
        token,
      });
    } catch (error) {
      Promise.reject(error);
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  return (
    <AuthContext.Provider value={{
      auth, setAuth,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
