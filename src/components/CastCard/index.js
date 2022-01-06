import React from 'react';

import { Card, CardContent, CardMedia, Button, Typography, Container, Grid } from '@mui/material';

function CastCard({ name, photo, country, birthday, gender }) {
    return (
        <Card>
            <CardMedia component='img' height={{ xs: 300, sm: 350 }} image={photo} alt={name} />
            <CardContent sx={{ backgroundColor: 'primary.main', padding: 1 }}>
                <Grid container spacing={1} justifyContent='space-between'>
                    <Grid item xs={6}>
                        <Typography fontSize={{ xs: 14, sm: 20 }} sx={{ color: 'secondary.main', fontWeight: 'bolder', textAlign: 'left' }}>{name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontSize={{ xs: 14, sm: 20 }} sx={{ color: 'secondary.main', fontWeight: 'bolder', textAlign: 'right' }}>G: {gender}</Typography>
                    </Grid>
                    {(birthday === null) ? 
                        <Grid item xs={12}>
                            <Typography fontSize={{ xs: 13, sm: 19 }} sx={{ color: 'secondary.main', fontWeight: 'bolder', textAlign: 'left' }}>Date of Birth: Not Found</Typography>
                        </Grid>
                        :
                        <Grid item xs={12}>
                            <Typography fontSize={{ xs: 13, sm: 19 }} sx={{ color: 'secondary.main', fontWeight: 'bolder', textAlign: 'left' }}>Date of Birth: {birthday}</Typography>
                        </Grid>
                    }
                    {(country === null) ? 
                        <Grid item xs={12}>
                            <Typography fontSize={{ xs: 13, sm: 19 }} sx={{ color: 'secondary.main', fontWeight: 'bolder', textAlign: 'left' }}>Country of Birth: Not Found</Typography>
                        </Grid>
                        :
                        <Grid item xs={12}>
                            <Typography fontSize={{ xs: 13, sm: 19 }} sx={{ color: 'secondary.main', fontWeight: 'bolder', textAlign: 'left' }}>Country of Birth: {country.name}</Typography>
                        </Grid>
                    }
                </Grid>
            </CardContent>
        </Card>
    );
}

export default CastCard;