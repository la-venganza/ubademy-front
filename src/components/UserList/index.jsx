import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import UserListItem from '../UserListItem';

const UserList = ({ users = [] }) => (
  <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
    {users.map((user) => (
      <>
        <UserListItem user={user} />
        <Divider variant="inset" component="li" />
      </>
    )) }
  </List>
);

export default UserList;
