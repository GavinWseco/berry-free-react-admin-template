import { Grid, Box } from '@mui/material';
import React, { useEffect } from 'react';
import OrderItems from './OrderItems';
import Header from './Header';
import ProgressBar from './ProgressBar';
import Shipments from './Shipments';
import { useLocation } from 'react-router-dom';
import * as signalR from '@microsoft/signalr';
function OrderDetails() {
    const location = useLocation();
    const [order, setOrder] = React.useState(location.state);

    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl("https://app-customerportal-dev-001.azurewebsites.net/hubs/order")
            .configureLogging(signalR.LogLevel.Information)
            .build();
        connection.start()
            .then(() => {
                console.log("Connected to OrderHub");
                connection.invoke("JoinOrderGroup", order.id)
                    .then(() => {
                        console.log(`Joined group for order ID: ${order.id}`);
                    })
                    .catch(err => console.error(err.toString()));
            })
            .catch(err => console.error(err.toString()));
        connection.on("UpdateOrder", (data) => {
            console.log("Order updated:", data);
            setOrder(data);
        });
        connection.onclose(err => {
            console.log("Connection closed:", err);
        });
        return () => {
            connection.stop();
        };
    }, [order]);
    return (
        <Box display="flex" justifyContent="center" alignItems="center" >
            <Grid container >
                <Grid item xs={12} justifyContent="center">
                    <ProgressBar state={order} />
                </Grid>
                <Grid item xs={9} justifyContent="center">
                    <Header state={order} />
                    <Shipments state={order.packingSlips} />
                </Grid>
                <Grid item xs={3} justifyContent="center">
                    <OrderItems packingSlips={order.packingSlips} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default OrderDetails
