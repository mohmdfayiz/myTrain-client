import { createSlice } from "@reduxjs/toolkit";
const modalSlice = createSlice({
    name:'modal',
    initialState:{
        show:false,
        data:{}
    },
    reducers:{
        setShow:(state) =>{
            state.show = !state.show
        },
        setData:(state,action) => {
            state.data = action.payload
        }
    }
})

export const {setData, setShow} = modalSlice.actions;
export default modalSlice.reducer;