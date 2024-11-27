import { configureStore } from "@reduxjs/toolkit";
import kartSlice from "./slice";

const store = configureStore({
  reducer: {
    nitroKarts: kartSlice.reducer,
  },
});

export const { setUserId, upDateAppointments, cancelAppointment, userLogout, userLoggedIn } = kartSlice.actions;

export default store;
