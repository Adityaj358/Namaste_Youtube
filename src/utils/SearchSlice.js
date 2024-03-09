import { CreateSlice, createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "Search",
    initialState:{},
    reducers: {
        cacheResults:(state,actions) => {
            state = Object.assign(state,actions.payload);
        }
    }
})

export const {cacheResults} = searchSlice.actions
export default searchSlice.reducer;