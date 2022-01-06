import React, { useState, useEffect } from 'react';

import { Grid, Typography, Container, Card, CardContent, CardMedia, Rating, Divider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Loader from '../components/Loader';

export default function MainShowPage() {
    const [showData, setData] = useState(null);
    const [castData, setCastData] = useState(null);

    useEffect(() => {
      fetch('https://api.tvmaze.com/lookup/shows?imdb=tt2193021')
       .then(response => response.json())
       .then(data => setData(data));
    }, []);

    useEffect(() => {
        fetch('https://api.tvmaze.com/shows/4/cast')
         .then(response => response.json())
         .then(data => setCastData(data));
    }, []);

    while (!showData || !castData) {
        return <Loader></Loader>
    }

    const names = [];
    castData.map((actor) => {
        names.push(actor.person.name);
    });
    const uniqueNames = [...new Set(names)];

    return (
        <Container maxWidth='sm' sx={{ marginTop: 3 }}>
            <Card>
                <CardContent sx={{ backgroundColor: 'primary.main' }}>
                    <Grid container spacing={0} justifyContent='space-between' alignItems='center'>
                        <Grid item xs={7}>
                            <Typography variant='h2' sx={{ fontWeight: 'bold', textAlign: 'left' }}>{showData.name}</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Rating name='read-only' value={((5 / showData.rating.average) * 5)} sx={{ color: 'secondary.main' }}></Rating>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardMedia component='img' height='auto' image={showData.image.original} alt={showData.name} />
                <CardContent sx={{ backgroundColor: 'primary.main', padding: 1 }}>
                    <Grid container spacing={1} justifyContent='space-between' alignItems='center'>
                        <Grid item xs={8}>
                            <Typography variant='h5' sx={{ textAlign: 'left', fontWeight: 'bold' }}>Premiered: {showData.premiered}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant='h5' sx={{ textAlign: 'right', fontWeight: 'bold', fontStyle: 'italic' }}>{showData.type}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h5' sx={{ textAlign: 'left', fontWeight: 'bold' }}>Ended: {showData.ended}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>CAST</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                {uniqueNames.map((actor, i) => (
                                    <Grid item xs={3} key={i}>
                                        <Typography fontSize={{ xs: 16 }} sx={{ fontWeight: 'bold' }}>{actor}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
}