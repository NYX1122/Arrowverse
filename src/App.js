import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import theme from './theme.js';

import Header from './components/Header';
import MovieCard from './components/MovieCard';
import Loader from './components/Loader';

import { Box, ThemeProvider } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [showData, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.tvmaze.com/lookup/shows?imdb=tt2193021')
     .then(response => response.json())
     .then(data => setData(data));
  }, []);

  while (!showData) {
    return <Loader></Loader>
  }

  return (
    <Box className="App" sx={{ minHeight: '100vh' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header></Header>
        <MovieCard cardData={{ showData }}></MovieCard>
      </ThemeProvider>
      <Outlet/>
    </Box>
  );
}

export default App;