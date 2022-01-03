import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ backgroundColor: '#000000' }}>
                    <Typography sx={{ variant: 'h1', display: 'flex', fontWeight: 'bold', fontSize: 40, textAlign: 'left', flexGrow: 1, color: 'primary.main'}}>ShowViewer</Typography>
                    <IconButton size='large' id='menu-button' sx={{ color: 'primary.main' }}
                        aria-controls={open ? 'menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu id='menu' anchorEl={anchorEl} open={open}
                        onClose={handleClose}
                        menulistprops={{ 'aria-labelledby': 'menu-button' }}
                    >
                        <MenuItem onClick={handleClose}><Link to='/Show'><Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>Show</Typography></Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to='/Cast'><Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>Cast</Typography></Link></MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;