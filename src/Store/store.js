import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Components/cartSlice";

let appStore = configureStore({
    reducer : {
         Cart : cartReducer
    }
});

export default appStore;