import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {GlobalError, User, ValidationError} from '../../types';
import {register} from './UsersThunk';

interface UsersState {
  user: User | null,
  registerLoading: boolean,
  registerError: ValidationError | null,
  loginLoading: boolean;
  loginError: GlobalError | null;
}

const initialState: UsersState = {
  user: null,
  registerLoading: false,
  registerError: null,
  loginLoading: false,
  loginError: null,
}


export const selectUser = (state: RootState) => state.users.user;
export const selectRegisterLoading = (state: RootState) => state.users.registerLoading;
export const selectRegisterError = (state: RootState) => state.users.registerError;

export const selectLoginLoading = (state: RootState) => state.users.loginLoading;
export const selectLoginError = (state: RootState) => state.users.loginError;



export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(register.pending, (state) => {
      state.registerLoading = true;
      state.registerError = null;
    });

    builder.addCase(register.fulfilled, (state, {payload: userResponse}) => {
      state.registerLoading = false;
      state.user = userResponse.user;
    });

    builder.addCase(register.rejected, (state,  {payload: error}) => {
      state.registerLoading = false;
      state.registerError = error || null;
    });

  },
});



export const usersReducer = usersSlice.reducer;