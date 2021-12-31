import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

function Header() {
    return(
        <Box sx={{ width: 'fill', height: 80, bgcolor: 'primary.main', boxShadow: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Typography sx={{ variant: 'h1' }}>Arrowverse</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;