import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import LessonsListItem from '../LessonsListItem';

const LessonsList = ({ lessons = [] }) => (
  <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
    {lessons.map((lesson) => (
      <>
        <LessonsListItem lesson={lesson} />
        <Divider variant="inset" component="li" />
      </>
    )) }
  </List>
);

export default LessonsList;
