import React, { useState } from 'react';
import {
  getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import userService from '../services/user';
import { configureAxiosHeaders } from '../utils/httpClient';

const provider = new GoogleAuthProvider();

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    debugger;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const doLoginWithGoogle = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        debugger;
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        configureAxiosHeaders(token);
        userService.getUser(result.user.email).then((response) => {
          debugger;
        });
        // The signed-in user info.
        const { user } = result;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const { email } = error;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleEmail = (value) => setEmail(value);
  const handlePassword = (value) => setPassword(value);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleEmail}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePassword}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={doLogin}
          >
            Sign In
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            onClick={doLoginWithGoogle}
          >
            Login with google
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default LoginScreen;
