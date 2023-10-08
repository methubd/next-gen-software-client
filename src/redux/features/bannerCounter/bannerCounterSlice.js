import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const bannerCounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCount: (initialState) => {
            if (initialState.count == 9) {
                return
            }
            initialState.count = initialState.count + 1
        }
    }
})
 
export const {incrementCount} = bannerCounterSlice.actions;
export default bannerCounterSlice.reducer;