import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './App.css';
import theme from './theme.js';

import Header from './components/Header';

import { Box, ThemeProvider } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <Box className="App" sx={{ minHeight: '100vh' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header></Header>
        <Link to='/Cast'>Cast</Link>
      </ThemeProvider>
      <Outlet/>
    </Box>
  );
}

export default App;