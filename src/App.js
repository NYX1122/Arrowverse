import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

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
      </ThemeProvider>
      <Outlet/>
    </Box>
  );
}

export default App;