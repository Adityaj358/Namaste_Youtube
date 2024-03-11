import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import SearchSlice from "./SearchSlice";
import chatSlice from "./ChatSlice";


const store = configureStore({
    reducer:{
        app:appSlice,
        Search:SearchSlice,
        chat:chatSlice,
    },
})

export default store;

