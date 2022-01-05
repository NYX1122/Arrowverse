import React from 'react';

import { Card, CardContent, CardMedia, Button, Typography, Container, Grid } from '@mui/material';

function CastCard({ name, photo, country, birthday, gender }) {
    console.log(name);
    return (
        <Card>
            <CardMedia component='img' height='300' image={photo} alt={name} />
            <CardContent sx={{ backgroundColor: 'primary.main', padding: 1 }}>
                <Typography variant='h6' sx={{ color: 'secondary.main' }}>{name}</Typography>
                <Typography className='landingCardTitles' variant='h6' sx={{ color: 'secondary.main' }}>{birthday}</Typography>
            </CardContent>
        </Card>
    );
}

export default CastCard;