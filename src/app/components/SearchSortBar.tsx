"use client"

import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { SelectChangeEvent } from '@mui/material/Select';
// SelectChangeEvent is a Material-UI-specific event type designed to work with Material-UI's Select component, 
// and that's why you import it from the Material-UI library. else we will got error while handling the event in select tag

const SearchSortBar = () => {
    const [sortBy, setSortBy] = React.useState('Newest');

    // const handleSortChange = (event) => {
    //     setSortBy(event.target.value);
    // }; ---->> error, as type not defined

    const handleSortChange = (event: SelectChangeEvent<string>) => {
        setSortBy(event.target.value as string);
    };

    return (
        <Box sx={{ mb: 2 }}>
            <Grid container spacing={0} alignItems="center">
                <Grid item xs={12} md={5}>
                    <Box sx={{ display: 'flex', alignItems: 'center', border:'1px solid rgba(0, 0, 0, 0.12),',borderRadius:'6px', }}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Search"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                sx: {
                                    height: '40px',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        height: '40px',
                                        border: 'none',
                                    },
                                    '& .MuiInputBase-input': {
                                        height: '30px', // adjust this as needed to fit within the outer height
                                        padding: '6px 14px', // adjust padding to center the text vertically
                                    },
                                },
                            }}
                            sx={{ height: '40px', }}
                        />
                        <Button
                            variant="contained"
                            startIcon={<FilterAltIcon />}
                            sx={{
                                height: '40px',
                                backgroundColor: '#f4f6f8',
                                color: 'primary.main',
                                '&:hover': {
                                    backgroundColor: '#f0f0f0',
                                },
                                boxShadow: 'none',
                                textTransform: 'none',
                            }}

                        >
                            Filters
                        </Button>
                    </Box>

                </Grid>
                <Grid item xs={12} md={2}>

                </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                    <Typography>Showing: 412 search results</Typography>
                </Grid>
                <Grid item xs={12} md={6} container justifyContent="flex-end" alignItems="center">
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ mr: 1 }}>Sort by:</Typography>
                        <Select
                            value={sortBy}
                            onChange={handleSortChange}
                            variant="outlined"
                            size="small"
                            sx={{ mr: 2 }}
                        >
                            <MenuItem value="Newest">Newest</MenuItem>
                            <MenuItem value="Oldest">Oldest</MenuItem>
                        </Select>
                        <IconButton>
                            <ViewListIcon />
                        </IconButton>
                        <IconButton>
                            <ViewModuleIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SearchSortBar;
