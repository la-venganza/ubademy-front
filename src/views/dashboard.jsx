import React, { useEffect, useState } from 'react';
import {
  Typography, Container, Grid, Paper,
} from '@mui/material';
import DashboardCard from '../components/DashboardCard';
import MetricsService from '../services/metrics';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await MetricsService.getMetrics();
      if (result) {
        setMetrics(result);
      }
    };
    fetchCourses();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
        style={{ marginBottom: 36 }}
      >
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 120,
            }}
          >
            <DashboardCard value={metrics.totalUsers} title="Total Users" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 120,
            }}
          >
            <DashboardCard value={metrics.googleUsers} title="Users with federated login" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 120,
          }}
          >
            <DashboardCard value={metrics.passwordUsers} title="Users with password" />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
