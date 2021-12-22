import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function DashboardCard({ title, value }) {
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>{title}</Typography>
      <Typography component="p" variant="h4">
        {value}
      </Typography>
    </>
  );
}
