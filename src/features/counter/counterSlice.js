import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:'conuter',
    initialState:{
        value:0
    },

    reducers:{
        increment:state=>{
            state.value=state.value+1
        },

        reset:state=>{
            state.value=0
        },
        decrement:state=>{
            state.value=state.value-1
        },
        incrementByAmount:(state,action)=>{
            state.value=state.value+action.payload
        }

    }
})

export const {increment,decrement,reset,incrementByAmount}=counterSlice.actions

export default counterSlice.reducer