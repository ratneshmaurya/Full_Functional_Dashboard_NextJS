import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [plan, setPlan] = useState('Basic');
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePlanChange = (event: SelectChangeEvent) => {
    setPlan(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '64px',
        width:'100%',
        padding: '0 10px',
        backgroundColor: '#fff',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
        fontSize: '5px'
        // border: '1px solid black', // or any desired border style
      }}
    >
      <Grid container alignItems="center" justifyContent="flex-end" spacing={2}>

        <Grid item>
          <Select
            value={plan}
            onChange={handlePlanChange}
            displayEmpty
            variant="outlined"
            size="small"
            sx={{ width: 150 }}
          >
            <MenuItem value="Basic">Basic</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
          </Select>
        </Grid>

        <Grid item>
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                mt: 1.5,
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Grid>

      </Grid>

    </Box>
  );
};

export default UserMenu;
