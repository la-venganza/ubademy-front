import React, { useEffect, useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {
  Box, TextField, Card, CardContent, CardMedia, Link,
} from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import cloudStorage from '../../utils/cloudStorage';

const LessonsListItem = ({ lesson }) => {
  const [assetUrl, setAssetUrl] = useState('');
  useEffect(() => {
    const getUrl = async () => {
      const mediaUrl = await cloudStorage.downloadUrl(lesson.multimedia_id);
      setAssetUrl(mediaUrl);
    };
    getUrl();
  });

  return (
    <ListItem alignItems="flex-start">
      <CardActionArea>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {lesson.title}
            </Typography>
            <Link href={assetUrl} color="inherit">
              Asset URL
            </Link>
            <Typography variant="body2" paragraph>
              Has Exam:
              {' '}
              {lesson?.exam?.id ? 'TRUE' : 'FALSE'}
            </Typography>
          </CardContent>
          {/* <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={lesson.image}
            alt={lesson.imageLabel}
          /> */}
        </Card>
      </CardActionArea>
    </ListItem>
  );
};

export default LessonsListItem;
