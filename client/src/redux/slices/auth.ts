import { createSlice } from '@reduxjs/toolkit';

const initialState: {
    loading: boolean;
    user: unknown;
    cachedUser?: unknown;
} = {
    loading: false,
    user: null,
    cachedUser: undefined,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        cacheUser: (state, action) => {
            state.cachedUser = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { cacheUser, setLoading, setUser } = authSlice.actions;
export default authSlice;
