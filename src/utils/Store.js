import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import SearchSlice from "./SearchSlice";


const store = configureStore({
    reducer:{
        app:appSlice,
        Search:SearchSlice,
    },
})

export default store;

