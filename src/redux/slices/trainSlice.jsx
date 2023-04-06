import { createSlice } from "@reduxjs/toolkit";
export const trainSlice = createSlice({
  name: "trains",
  initialState: {
    search: { source: "", destination: "" },
    searchResult: [],
  },
  reducers: {
    setSearch: (state,action) => {
        state.search = action.payload;
    },
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

export const { setSearch, setSearchResult } = trainSlice.actions;
export default trainSlice.reducer;
