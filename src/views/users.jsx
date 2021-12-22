import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import UsersService from '../services/user';
import UserList from '../components/UserList';

const UsersListView = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const usersResponse = await UsersService.getUsers();
      setLoading(false);
      if (!usersResponse) {
        setError(true);
        return;
      }
      setUsers(usersResponse.results);
    };
    fetchUsers();
  }, []);

  const renderLoading = () => (<div><span>Loading</span></div>);
  const renderError = () => (<div><span>There was an error while fetching the users</span></div>);
  const renderResults = () => (<UserList users={users} />);

  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '80%',
        }}
      >
        {loading ? renderLoading() : error ? renderError() : renderResults()}
      </Box>
    </Container>
  );
};

export default UsersListView;
