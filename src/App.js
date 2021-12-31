import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import theme from './theme.js';

import { Box, ThemeProvider } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <Box className="App" sx={{ minHeight: '100vh' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header></Header>
      </ThemeProvider>
    </Box>
  );
}

export default App;