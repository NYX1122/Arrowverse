import React from 'react';

import { Card, CardContent, CardMedia, Button, Typography, Container, Grid } from '@mui/material';

function CastCard({ name, photo, country, birthday, gender }) {
    return (
        <Card>
            <CardMedia component='img' height='300' image={photo} alt={name} />
            <CardContent sx={{ backgroundColor: 'primary.main', padding: .8 }}>
                <Grid container spacing={1} justifyContent='space-between'>
                    <Grid item xs={6}>
                        <Typography sx={{ color: 'secondary.main', fontWeight: 'bolder', fontSize: 14, textAlign: 'left' }}>{name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ color: 'secondary.main', fontWeight: 'bolder', fontSize: 14, textAlign: 'right' }}>G: {gender}</Typography>
                    </Grid>
                    {(birthday === null) ? 
                        <Grid item xs={12}>
                            <Typography sx={{ color: 'secondary.main', fontWeight: 'bolder', fontSize: 13, textAlign: 'left' }}>Date of Birth: Not Found</Typography>
                        </Grid>
                        :
                        <Grid item xs={12}>
                            <Typography sx={{ color: 'secondary.main', fontWeight: 'bolder', fontSize: 13, textAlign: 'left' }}>Date of Birth: {birthday}</Typography>
                        </Grid>
                    }
                    {(country === null) ? 
                        <Grid item xs={12}>
                            <Typography sx={{ color: 'secondary.main', fontWeight: 'bolder', fontSize: 13, textAlign: 'left' }}>Country of Birth: Not Found</Typography>
                        </Grid>
                        :
                        <Grid item xs={12}>
                            <Typography sx={{ color: 'secondary.main', fontWeight: 'bolder', fontSize: 13, textAlign: 'left' }}>Country of Birth: {country.name}</Typography>
                        </Grid>
                    }
                </Grid>
            </CardContent>
        </Card>
    );
}

export default CastCard;