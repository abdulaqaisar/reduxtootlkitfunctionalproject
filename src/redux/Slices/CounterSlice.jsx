import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    name: localStorage.getItem("Name") || "",
    email: localStorage.getItem("Email") || "",
    phone: localStorage.getItem("Name") || "",
    profileimg: localStorage.getItem("ProfileImg") || null,
    submit: {},
    remove:{}
  },
  reducers: {
    Name: (state, action) => {
      state.name = action.payload;
    },
    Email: (state, action) => {
      state.email = action.payload;
    },
    Phone: (state, action) => {
      state.phone = action.payload;
    },
    Profile: (state, action) => {
      state.profileimg = action.payload;
    },
    Submit: (state) => {
      localStorage.setItem("Name", state.name);
      localStorage.setItem("Email", state.email);
      localStorage.setItem("Phone", state.phone);
      localStorage.setItem("ProfileImg", state.profileimg);
    },
    Remove: (state) => {
      localStorage.removeItem("Name");
      localStorage.removeItem("Email");
      localStorage.removeItem("Phone");
      localStorage.removeItem("ProfileImg");
      state.name = "" 
      state.phone = "" 
      state.email = "" 
      state.profileimg = "" 
    },
  },
});

export const { Name, Email, Phone, Profile, Submit ,Remove} = counterSlice.actions;

export default counterSlice.reducer;
