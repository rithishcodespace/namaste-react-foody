import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
const ReduxStore = configureStore({
    reducer:{
        cart:cartReducer,
    }
});
export default ReduxStore;