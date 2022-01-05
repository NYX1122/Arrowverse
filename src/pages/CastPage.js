import React, { useState, useEffect } from 'react';

import { Grid, Container } from '@mui/material';

import Loader from '../components/Loader';
import CastCard from '../components/CastCard';

export default function CastPage() {
    const [castData, setData] = useState(null);

    useEffect(() => {
      fetch('https://api.tvmaze.com/shows/4/cast')
       .then(response => response.json())
       .then(data => setData(data));
    }, []);
  
    while (!castData) {
      return <Loader></Loader>
    }
    console.log(castData);
    return (
        <Container sx={{ marginTop: '4%' }}>
            <Grid container spacing={1} justifyContent='space-between'>
                {castData.map((actor) => (
                    <Grid item xs={6}>
                        <CastCard
                            name={actor.person.name}
                            photo={actor.person.image.original}
                            country={actor.person.country}
                            birthday={actor.person.birthday}
                            gender={actor.person.gender}
                        >
                        </CastCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}