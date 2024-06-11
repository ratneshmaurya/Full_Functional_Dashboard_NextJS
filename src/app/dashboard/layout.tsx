
'use client'

import React from 'react';
import Menu from '../components/Menu';
import UserMenu from '../components/UserMenu';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: 'flex' }}>

      {/* using cssBaseline for a default style to margin, padding and other things using MUI */}
      <CssBaseline />
      <Menu />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: '#f4f6f8',
          minHeight: '100vh',
        }}
      >
        <UserMenu />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
