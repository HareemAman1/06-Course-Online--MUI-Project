import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Toolbar, Typography, TextField, Autocomplete, IconButton, InputAdornment } from '@mui/material';
import { CourseList } from '../data';
import SearchIcon from '@mui/icons-material/Search';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Layout>
      <Box sx={{ width: '50%', margin: '0 auto'}}>
        <Toolbar />
          <IconButton>
            <SearchIcon sx={{color:'purple'}} />
          </IconButton>
          <Autocomplete
            value={searchTerm}
            onChange={(event, newValue) => {
              setSearchTerm(newValue || '');
            }}
            options={CourseList.map((course) => course.name)} // Assuming CourseList is an array of objects with a 'name' property
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search courses"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {CourseList.filter((course) =>
          course.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((course) => (
          <Card sx={{ maxWidth: '400px', display: 'flex', margin: '30px 15px' }} key={course.name}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: '300px' }}
                component={'img'}
                src={course.image}
                alt={course.image}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={'div'}>
                  {course.name}{' '}
                </Typography>
                <Typography variant="body2">{course.description}</Typography>
                <Typography variant="body2">{course.price}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Box>
      <Toolbar />
    </Box>
    </Layout>
    
  );
};

export default Courses;