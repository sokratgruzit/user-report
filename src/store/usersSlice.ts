import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { UsersState, AxiosResponse } from '../types/User';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (term: string = '') => {
        const response = await axios.get<AxiosResponse>(
            `http://localhost:3000${term ? `?term=${term}` : ''}`
        );
        
        const result = response.data;

        if (result.success) {
            return result.data;
        } else {
            return [];
        }
    }
);

const initialState: UsersState = {
    users: [],
    selectedUser: null,
    loading: false,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setSelectedUser(state, action) {
            state.selectedUser = action.payload;
        },
        clearSelectedUser(state) {
            state.selectedUser = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false;
        });
    },
});

export const { setSelectedUser, clearSelectedUser } = usersSlice.actions;
export default usersSlice.reducer;
