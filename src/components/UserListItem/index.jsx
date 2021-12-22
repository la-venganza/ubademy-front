import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const UserListItem = ({ user }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/user/${user.email}`);
  };

  return (
    <ListItem alignItems="flex-start" onClick={onClick}>
      <ListItemAvatar>
        <Avatar alt={`${user.first_name} ${user.last_name}`} src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={`@${user.username}`}
        secondary={(
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {user.first_name ? `${user.first_name} ${user.last_name}` : 'no name provided'}
            </Typography>
            {'  -  '}
            {user.email}
          </>
          )}
      />
    </ListItem>
  );
};

export default UserListItem;
