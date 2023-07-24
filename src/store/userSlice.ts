import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    id: string;
    firstname: string;
    lastname: string;
    auth: boolean;
    role: string;
    books: Array<string>;
}

const initialState: UserState = {
    id: "",
    firstname: "",
    lastname: "",
    auth: false,
    role: "",
    books: []
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
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
    setBook: (state, action: PayloadAction<Array<string>>) => {
      state.books = [...action.payload];
    },
  },
});

export const { setFirstName, setLastName, setAuth, setRole, setId, setBook } = userSlice.actions;
export default userSlice.reducer;