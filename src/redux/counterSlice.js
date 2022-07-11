import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {                 //reducerを設定すると自動的にaction,createrも生成される
        increment: (state) => {    
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {   
            state.value += action.payload;             //未決定の値をうけとるpayload  //2,10,100
    },
    },
});

export const { increment, decrement,incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
