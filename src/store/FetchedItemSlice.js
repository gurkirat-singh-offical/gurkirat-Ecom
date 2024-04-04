import { createSlice } from "@reduxjs/toolkit";


const FetchedItemSlice = createSlice({
  name: "fetchedStatus",
  initialState: {
    fetchedDone: false,
    currentlyFeching: false,
  },
  reducers: {
    markFechedDone: (state) => {
        return state.fetchedDone = true;
    },
    markFecheingStarted: (state) => {
        return state.currentlyFeching=true;
    },
    markFecheingEnd: (state) => {
        return state.currentlyFeching=false
    },
  },
});

export const fetchStatusActions = FetchedItemSlice.actions;

export default FetchedItemSlice;