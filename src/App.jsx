import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter, Route, Routes, HashRouter,
} from 'react-router-dom';
import { Box } from '@mui/material';
import Login from './views/login';
import Users from './views/users';
import Courses from './views/courses';
import { AuthContext, AuthProvider } from './context/auth';
import Header from './components/Header';
import SideMenu from './components/Drawer';
import UserDetailView from './views/userDetailView';

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <AuthContext.Consumer>
        { ({ auth }) => (
          <div>
            {
                  (() => {
                    if (auth.token !== '') {
                      return (
                        <>

                          <HashRouter>
                            <Header />
                            <Box>
                              <SideMenu />
                              <Routes>
                                <Route path="/" element={<Users />} />
                                <Route path="/courses" element={<Courses />} />
                                <Route path="/user/:email" element={<UserDetailView />} />
                              </Routes>
                            </Box>
                          </HashRouter>

                        </>
                      );
                    }
                    return (

                      <BrowserRouter>
                        <Routes>
                          <Route path="/" element={<Login />} />

                        </Routes>
                      </BrowserRouter>
                    );
                  })()
                }
          </div>
        )}
      </AuthContext.Consumer>
    </AuthProvider>

  </ThemeProvider>
);

export default App;
