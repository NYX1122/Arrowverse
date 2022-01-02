import React from 'react';
import { Box, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography sx={{ variant: 'h1', display: 'flex', fontWeight: 'bold', fontSize: 40, textAlign: 'left', flexGrow: 1 }}>Arrowverse</Typography>
                    <IconButton size="large" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;