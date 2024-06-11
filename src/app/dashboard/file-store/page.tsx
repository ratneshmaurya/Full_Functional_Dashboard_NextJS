

import React from 'react';
import SearchSortBar from '../../components/SearchSortBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

const FileStorePage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: '#f4f6f8',
        padding: 3,
        marginTop:'10px'
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Grid item>
          <Typography variant="h6" sx={{fontWeight:'bold', fontSize: '26px'}}>File Store</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: '6px', // Set border radius
              '&:hover': {
                backgroundColor: '#1976d2', // Change background color on hover if needed
              },
            }}
          >
            <CreateNewFolderIcon sx={{mr:1}}/>
            Create New File Store
          </Button>
        </Grid>
      </Grid>
      <SearchSortBar />
    </Box>
  );
};

export default FileStorePage;
