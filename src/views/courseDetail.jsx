import React, { useEffect, useMemo, useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import CourseService from '../services/courses';
import LessonsList from '../components/LessonsList';

const UserDetailView = () => {
  const [course, setCourse] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      const { id } = params;
      const response = await CourseService.getCourse(id);
      if (response) {
        setCourse(response);
      }
    };
    fetchCourse();
  }, []);

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center" style={{ marginBottom: 24 }}>
          Course
          {' '}
          {course.id}
        </Typography>
        {course.id
          ? (
            <Container>
              <Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled
                      id="Title"
                      label="Title"
                      variant="standard"
                      defaultValue={course.title}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled
                      id="SubscriptionType"
                      label="Subscription Type"
                      variant="standard"
                      defaultValue={course.subscription_required.title}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled
                      id="type"
                      label="Type"
                      variant="standard"
                      defaultValue={course.type}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled
                      id="location"
                      label="Location"
                      variant="standard"
                      defaultValue={course.location}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      disabled
                      id="Description"
                      label="Description"
                      variant="standard"
                      fullWidth
                      multiline
                      defaultValue={course.description}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled
                      id="creator_id"
                      label="Creator id"
                      variant="standard"
                      defaultValue={course.creator_id}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled
                      id="lesson_count"
                      label="Lesson Count"
                      variant="standard"
                      defaultValue={course.lessons.length}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Typography component="h2" variant="h5" align="center" style={{ marginBottom: 24, marginTop: 56 }}>
                  Lessons
                </Typography>

                <LessonsList lessons={course.lessons} />
              </Box>
            </Container>
          )

          : <span>Loading</span>}
      </Paper>
    </Container>
  );
};

export default UserDetailView;
