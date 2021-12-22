import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import CourseService from '../services/courses';
import CourseList from '../components/CourseList';

const CoursesListView = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const coursesResponse = await CourseService.getCourses();
      setLoading(false);
      if (!coursesResponse) {
        setError(true);
        return;
      }
      setCourses(coursesResponse.results);
    };
    fetchCourses();
  }, []);

  const renderLoading = () => (<div><span>Loading</span></div>);
  const renderError = () => (<div><span>There was an error while fetching the courses</span></div>);
  const renderResults = () => (<CourseList courses={courses} />);

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

export default CoursesListView;
