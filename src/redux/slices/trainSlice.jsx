import { createSlice } from "@reduxjs/toolkit";
export const trainSlice = createSlice({
    name:'trains',
    initialState:{
        searchResult:[]
    },
    reducers:{
        setSearchResult:(state,action) =>{
            state.searchResult = action.payload;
        }
    }
})

export const {setSearchResult} = trainSlice.actions;
export default trainSlice.reducer;