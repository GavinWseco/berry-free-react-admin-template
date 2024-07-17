import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import { alertSlice } from './alerts';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  alert: alertSlice.reducer,
});

export default reducer;
