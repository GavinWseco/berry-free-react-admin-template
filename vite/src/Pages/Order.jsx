import React, { useState, useEffect } from 'react';
import OrderSearch from 'ui-component/Orders/OrderSearch';
import Loader from 'ui-component/Loader';
import { useNavigate } from 'react-router-dom';


const Order = () => {
    const [state, setState] = useState({
        order: {},
        loading: false,
        error: false,
        salesOrderId: ""
    });
    const navigate = useNavigate();
    useEffect(() => {
        if (state.order && state.order.id)
            navigate(`/Orders/${state.salesOrderId}`, { state: state.order });
    }, [state.order, navigate]);

    return (
        <>
            <OrderSearch setState={setState} state={state} />
            {state.loading ? <Loader /> : null}
        </>
    );
};

export default Order;