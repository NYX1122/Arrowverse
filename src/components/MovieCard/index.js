import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, CardMedia, Button, Typography, Container, Grid } from '@mui/material';

function MovieCard({ cardData: { showData } }) {

    return (
        <Container maxWidth='sm' sx={{ paddingTop: 5 }}>
            <Card>
                <CardMedia component='img' height='auto' image={showData.image.original} alt={showData.name} />
                <CardContent sx={{ backgroundColor: 'primary.main' }}>
                    <Grid container spacing={0} justifyContent='space-between' marginBottom='4%'>
                        <Grid item>
                            <Typography className='landingCardTitles' variant='h3' sx={{ color: 'secondary.main', fontWeight: 'bold' }}>{showData.name}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h3' color='secondary.main' sx={{ fontWeight: 'bold' }}>{showData.rating.average}/10</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} justifyContent='start'>
                        <Grid item sx={{ marginRight: '5%' }}>
                            <Link to='/Show'><Button variant='contained' sx={{ fontSize: 20 }}>Info</Button></Link>
                        </Grid>
                        <Grid>
                            <Link to='/Cast'><Button variant='contained' sx={{ fontSize: 20 }}>Cast</Button></Link>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
}

export default MovieCard;