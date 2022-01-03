import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Card, CardActionArea, CardMedia, Button, Box, Typography } from '@mui/material';

function MovieCard( { cardData: { showData } } ) {
    console.log(showData);

    return (
        <Grid container spacing={0} mt={4} justifyContent='center'>
            <Grid item xs={10}>
                <Card>
                    <CardActionArea>
                        <CardMedia component='img' height='auto' image={showData.image.original} alt={showData.name}>
                        </CardMedia>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Box>
                    <Typography variant='h2' sx={{ backgroundColor: 'secondary.main', color: 'primary.main' }}>{showData.name}</Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default MovieCard;