import React, { useEffect, useMemo, useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import UserService from '../services/user';

const UserDetailView = ({ email }) => {
  const [user, setUser] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const { email } = params;
      const response = await UserService.getUserFull(email);
      if (response) {
        setUser(response);
      }
    };
    fetchUser();
  }, []);

  const getSubscription = useMemo(() => (user?.subscriptions?.length
    ? user.subscriptions[user.subscriptions.length - 1].subscription.title
    : 'Free'), [user]);

  const createdCoursesCount = useMemo(() => (
    user?.created_courses?.length ? user.created_courses.length : 0
  ));

  const enrolledCoursesCount = useMemo(() => (
    user?.enroll_courses?.length ? user.enroll_courses.length : 0
  ));

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center" style={{ marginBottom: 24 }}>
          User profile
        </Typography>
        {user.user_id
          ? (
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled
                    id="First Name"
                    label="First Name"
                    variant="standard"
                    defaultValue={user.first_name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled
                    id="Last Name"
                    label="Last Name"
                    variant="standard"
                    defaultValue={user.last_name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled
                    id="email"
                    label="Email"
                    variant="standard"
                    defaultValue={user.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled
                    id="subscription"
                    label="Subscription type"
                    variant="standard"
                    defaultValue={getSubscription}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    disabled
                    id="UserId"
                    label="User ID"
                    variant="standard"
                    fullWidth
                    defaultValue={user.user_id}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled
                    id="created_courses"
                    label="Created courses"
                    variant="standard"
                    defaultValue={createdCoursesCount}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled
                    id="enrolled_courses"
                    label="Enrolled Courses"
                    variant="standard"
                    defaultValue={enrolledCoursesCount}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled
                    id="role"
                    label="Role"
                    variant="standard"
                    defaultValue={createdCoursesCount > 0 ? 'Teacher' : 'Student'}
                  />
                </Grid>
              </Grid>
            </Box>
          )

          : <span>Loading</span>}
      </Paper>
    </Container>
  );
};

export default UserDetailView;
