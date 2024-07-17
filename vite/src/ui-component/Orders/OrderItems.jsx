import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function OrderItems({ packingSlips }) {
    return (
        <>
            <Typography variant='h5' sx={{ marginBottom: 1 }} >Order Details</Typography>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    {packingSlips.map((packingSlip, index) => (
                        <div key={index}>
                            <Typography variant="h6" component="p">
                                {packingSlip.packingSlipId}
                            </Typography>
                            {packingSlip.parts.map((item, itemIndex) => (
                                <div key={itemIndex}>
                                    <Typography variant="body2" component="p">
                                        {item.number}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {item.quantityOrdered}
                                    </Typography>
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
