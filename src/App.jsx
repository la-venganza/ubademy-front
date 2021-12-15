import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/login';
import Courses from './views/courses';
import { AuthContext, AuthProvider } from './context/auth';

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <AuthContext.Consumer>
        { ({ auth }) => (
          <div>
            asd
            <BrowserRouter>
              <Routes>
                {
                  (() => {
                    if (auth.token !== '') {
                      return (
                        <Route path="/" element={<Courses />} />
                      );
                    }
                    return (
                      <Route path="/" element={<Login />} />
                    );
                  })()
                }
              </Routes>
            </BrowserRouter>
          </div>
        )}
      </AuthContext.Consumer>
    </AuthProvider>

  </ThemeProvider>
);

export default App;
