import OrderDetails from "ui-component/Orders/OrderDetails";
import OrderSearch from "ui-component/Orders/OrderSearch";
import { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";
import Test from "ui-component/Test";
import Loader from "ui-component/Loader";


const Orders = () => {
    const [state, setState] = useState({
        order: {},
        loading: false,
        error: false,
        salesOrderId: ""
    });

    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl("https://localhost:5001/hubs/order")
            .configureLogging(signalR.LogLevel.Information)
            .build();
        connection.start()
            .then(() => {
                console.log("Connected to OrderHub");
                connection.invoke("JoinOrderGroup", state.salesOrderId)
                    .then(() => {
                        console.log(`Joined group for order ID: ${state.salesOrderId}`);
                    })
                    .catch(err => console.error(err.toString()));
            })
            .catch(err => console.error(err.toString()));
        connection.on("UpdateOrder", (data) => {
            console.log("Order updated:", data);
            setState(prevState => ({ ...prevState, order: data }));
        });
        connection.onclose(err => {
            console.error("Connection closed:", err);
        });
        return () => {
            connection.stop();
        };
    }, [state.salesOrderId]);


    return (
        <>
            {state.order.id == null ? < OrderSearch setState={setState} state={state} /> : null}
            {state.order.id != null ? <OrderDetails state={state} /> : null}
            {state.loading ? <Loader /> : null}

        </>

    );
};

export default Orders;