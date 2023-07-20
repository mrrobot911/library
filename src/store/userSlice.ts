import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    firstname: string;
    lastname: string;
    auth: boolean;
    role: string;
}

const initialState: UserState = {
    firstname: "",
    lastname: "",
    auth: false,
    role: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstname = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastname = action.payload;
    },
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setAuth, setRole } = userSlice.actions;
export default userSlice.reducer;