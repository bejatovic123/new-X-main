import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isLogin: false, user: null };

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.isLogin = action.payload.login;
            state.user = action.payload;
        },
        logout(state) {
            state.isLogin = false;
            state.user = null;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;