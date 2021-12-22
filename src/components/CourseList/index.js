import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CourseListItem from '../CourseListItem';

const CourseList = ({ courses = [] }) => (
  <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
    {courses.map((course) => (
      <>
        <CourseListItem course={course} />
        <Divider variant="inset" component="li" />
      </>
    )) }
  </List>
);

export default CourseList;
