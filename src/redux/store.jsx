import { configureStore } from "@reduxjs/toolkit";
import trainReducer from "./slices/trainSlice";
import modalReducer from "./slices/modal";
export default configureStore({
  reducer: {
    trains: trainReducer,
    modal: modalReducer,
  },
});
