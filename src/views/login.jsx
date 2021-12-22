import React, { useState, useContext } from 'react';
import {
  getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import userService from '../services/user';
import { AuthContext } from '../context/auth';

const provider = new GoogleAuthProvider();

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authCtx = useContext(AuthContext);

  const doLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const { user } = userCredential;
        const idToken = await auth.currentUser.getIdToken();
        userService.setCookie(idToken);
        userService.getUser(user.email).then((response) => {
          authCtx.setAuthState(idToken);
        });
      })
      .catch((error) => {
        console.log('internal error on login: ', error);
      });
  };

  const doLoginWithGoogle = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const idToken = await auth.currentUser.getIdToken();
        userService.setCookie(idToken);
        userService.getUser(result.user.email).then((response) => {
          debugger;
          if (response) {
            authCtx.setAuth(idToken);
          }
        });
      }).catch((error) => {
        console.log('internal error on login: ', error);
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
