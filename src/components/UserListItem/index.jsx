import React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const UserListItem = ({ user }) => (
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt={`${user.first_name} ${user.last_name}`} src="/static/images/avatar/1.jpg" />
    </ListItemAvatar>
    <ListItemText
      primary={`${user.first_name} ${user.last_name}`}
      secondary={(
        <>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {`@${user.username}`}
          </Typography>
          {'  -  '}
          {user.email}
        </>
          )}
    />
  </ListItem>
);

export default UserListItem;
