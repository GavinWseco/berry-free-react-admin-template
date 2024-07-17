import { createSlice } from "@reduxjs/toolkit";
import { HTTP_RESULT } from "../Constants/index.js";

const initialState = {};

export const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        addSuccessAlert: (state, action) => {
            state.type = HTTP_RESULT.SUCCESS;
            state.message = action.payload || 'Success';
        },
        addInfoAlert: (state, action) => {
            state.type = HTTP_RESULT.INFORMATION;
            state.message = action.payload || 'Info';
        },
        addErrorAlert: (state, action) => {
            state.type = HTTP_RESULT.ERROR;
            state.message = action.payload || 'Error';

        },
        clearAlert: (state) => {
            state.type = null;
            state.message = null;
        },
    },
});


export const { addSuccessAlert, addErrorAlert, addInfoAlert, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;