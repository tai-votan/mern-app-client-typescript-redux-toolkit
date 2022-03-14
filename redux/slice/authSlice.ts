import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import userAPI from "@/services/auth";
import { AuthLogin, CurrentUser, AuthState } from "@/interfaces/auth";
import { setAuthToken } from "@/utils/auth";

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (params: AuthLogin) => userAPI.userLogin(params)
);

const initialState = <AuthState>{
  isLoggedIn: false,
  loading: false,
  currentUser: {},
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [userLogin.pending.type]: (state) => {
      state.loading = true;
    },
    [userLogin.fulfilled.type]: (
      state,
      { payload }: PayloadAction<CurrentUser>
    ) => {
      state.loading = false;
      if (!payload) {
        return;
      }
      state.isLoggedIn = true;
      state.currentUser = payload;
      setAuthToken(payload.token);
    },
    [userLogin.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
