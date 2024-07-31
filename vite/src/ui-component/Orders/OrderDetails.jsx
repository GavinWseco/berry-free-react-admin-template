import { Grid, Box } from '@mui/material';
import React, { useState } from 'react';
import OrderItems from './OrderItems';
import Header from './Header';
import ProgressBar from './ProgressBar';
import Shipments from './Shipments';
function OrderDetails({ state }) {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" >
            <Grid container >
                <Grid item xs={12} justifyContent="center">
                    <ProgressBar state={state.order} />
                </Grid>
                <Grid item xs={9} justifyContent="center">
                    <Header state={state.order} />
                    <Shipments state={state.order.packingSlips} />
                </Grid>
                <Grid item xs={3} justifyContent="center">
                    <OrderItems packingSlips={state.order.packingSlips} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default OrderDetails
