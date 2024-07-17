import { func } from "prop-types";
import useApi from "./Axios";
import { useDispatch, useSelector } from 'react-redux';
import { addErrorAlert, addSuccessAlert } from "store/alerts";

export function useOrders() {
    const api = useApi();
    const dispatch = useDispatch();


    const getOrders = async (id, accountNumber) => {
        try {
            const response = await api.get(`/Order?id=${id}&accountNumber=${accountNumber}`);
            dispatch(addSuccessAlert('Orders fetched successfully'));
            return response.data;
        } catch (error) {
            dispatch(addErrorAlert('Error fetching orders'));
        };
    }

    return { getOrders };
}