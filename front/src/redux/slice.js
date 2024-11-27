import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: 0,
  appointment: [],
  isLoggedIn: false,
};

const kartSlice = createSlice({
  name: "nitroKarts",
  initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
    upDateAppointments(state, action) {
      state.appointment = action.payload;
    },
    cancelAppointment(state, action) {
      // cancel(action.payload)
      state.appointment = state.appointment;
    },
    userLogout(state) {
      state.userId = 0;
      state.appointment = [];
      state.isLoggedIn = false; 
    },
    userLoggedIn(state) {
      state.isLoggedIn = true; 
    },
  },
});

export const {
  setUserId,
  upDateAppointments,
  cancelAppointment,
  userLogout,
  userLoggedIn,
} = kartSlice.actions;

export default kartSlice;
