import React, { useState, useEffect } from 'react';

import { Typography, Grid } from '@mui/material';

import Loader from '../components/Loader';

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

    return (
        <Grid container spacing={1} justifyContent='space-between'>
            {castData.map((actor) => (
                <CastCard
                    character={actor.character.name}
                    actor={actor.person.name}
                    photo={actor.person.image.original}
                    country={actor.person.country.name}
                    birthday={actor.person.birthday}
                    
                >
                </CastCard>
            ))}
        </Grid>
    );
}