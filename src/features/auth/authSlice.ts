import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    firstName: string | null;
    lastName: string | null;
}

const initialState: UserState = {
    firstName: null,
    lastName: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            (state.firstName = action.payload.firstName),
                (state.lastName = action.payload.lastName);
        },
    },
});
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
