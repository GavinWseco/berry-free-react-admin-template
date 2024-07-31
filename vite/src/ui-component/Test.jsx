import React, { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';

const OrderHubClient = () => {
    const [orderData, setOrderData] = useState(null);
    const orderId = "00C0458283";
    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl("https://localhost:5001/hubs/order")
            .configureLogging(signalR.LogLevel.Information)
            .build();

        connection.start()
            .then(() => {
                console.log("Connected to OrderHub");

                // Join the order group
                connection.invoke("JoinOrderGroup", orderId)
                    .then(() => {
                        console.log(`Joined group for order ID: ${orderId}`);
                    })
                    .catch(err => console.error(err.toString()));
            })
            .catch(err => console.error(err.toString()));

        // Listen for updates to the order
        connection.on("UpdateOrder", (data) => {
            console.log("Order updated:", data);
            setOrderData(data);
        });

        // Handle connection close
        connection.onclose(err => {
            console.error("Connection closed:", err);
            // Optionally, you can try to reconnect
        });

        // Cleanup on unmount
        return () => {
            connection.stop();
        };
    }, [orderId]);

    return (
        <div>
            <h1>Order Details</h1>
            {orderData ? (
                <pre>{JSON.stringify(orderData, null, 2)}</pre>
            ) : (
                <p>Loading order data...</p>
            )}
        </div>
    );
};

export default OrderHubClient;