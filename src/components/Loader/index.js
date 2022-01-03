import React from 'react'
import { Box, CircularProgress } from '@mui/material';

function Loader() {
  return (
    <Box sx={{width: '100%', height: 'calc(100vh - 55px)', pt: 'calc(100vh - 80vh)', display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', }}>
      <CircularProgress
        variant='indeterminate'
        disableShrink
        color='success'
        sx={{
          animationDuration: '550ms',
        }}
        size={75}
        thickness={4}
      />
    </Box>
  )
}

export default Loader;