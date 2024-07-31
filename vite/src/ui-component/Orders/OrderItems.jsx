import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

function OrderItems({ packingSlips }) {
    const theme = useTheme();
    return (
        <>
            <Typography variant='h4' sx={{ marginBottom: 1, marginLeft: 1 }} >Order Details</Typography>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    {packingSlips.map((packingSlip, index) => (
                        <div key={index}>
                            <Typography variant="h5" sx={{ borderBottom: "1px solid", marginBottom: 1 }}>
                                {packingSlip.id}
                            </Typography>
                            {packingSlip.parts.map((item, itemIndex) => (
                                <div key={itemIndex}>
                                    <Grid container sx={{ padding: 1 }} >
                                        <Grid item xs={4}>
                                            <Typography variant="body2" component="p">
                                                Number
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {item.number}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="body2" component="p">
                                                Name
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {item.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="body2" component="p">
                                                Ordered
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {item.quantityOrdered}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            ))}
                        </div>
                    ))}
                </CardContent>
            </Card>
        </>
    );
}

export default OrderItems;
