import OrderDetails from "ui-component/Orders/OrderDetails";
import OrderSearch from "ui-component/Orders/OrderSearch";
import { useState } from "react"

    ;
import Loader from "ui-component/Loader";

const Orders = () => {
    const [state, setState] = useState({
        order: {},
        loading: false,
        error: false,
    });
    return (
        <>
            {state.order.id == null ? < OrderSearch setState={setState} state={state} /> : null}
            {state.order.id != null ? <OrderDetails state={state} /> : null}
            {state.loading ? <Loader /> : null}
        </>

    );
};

export default Orders;