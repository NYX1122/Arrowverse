import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Card, CardActionArea, CardMedia, Button, Stack, Container, Typography } from '@mui/material';

function MovieCard( { cardData: { showData } } ) {
    console.log(showData);

    return (
        <Container sx={{ padding: '5%' }}>
            <Stack>
                <Card>
                    <CardActionArea>
                        <CardMedia component='img' height='auto' image={showData.image.original} alt={showData.name}>
                        </CardMedia>
                    </CardActionArea>
                </Card>
            </Stack>
            <Grid container spacing={0} justifyContent='space-between'>
                <Grid item xs={4}>
                    <Link to='/Show'><Button variant='contained' sx={{ fontSize: 25 }}>Info</Button></Link>
                </Grid>
                <Grid item xs={'auto'}>
                    <Typography className='landingCardTitles' variant='h2' sx={{ backgroundColor: 'secondary.main', color: 'primary.main', padding: 0.8 }}>{showData.name}</Typography>
                </Grid>
                <Grid item xs={4}>
                <Link to='/Cast'><Button variant='contained' sx={{ fontSize: 25 }}>Cast</Button></Link>
                </Grid>
            </Grid>
        </Container>
    );
}

export default MovieCard;