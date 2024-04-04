import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./ItemsSlice";
import FetchedItemSlice from "./FetchedItemSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchedStatus: FetchedItemSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;

