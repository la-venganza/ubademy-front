import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';

const CourseListItem = ({ course }) => (
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Icon>book</Icon>
    </ListItemAvatar>
    <ListItemText
      primary={course.title}
      secondary={(
        <>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {course.description}
          </Typography>
          {'  -  '}
          {course.type}
        </>
          )}
    />
  </ListItem>
);

export default CourseListItem;
