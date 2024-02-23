import { createAsyncThunk } from '@reduxjs/toolkit';
import {isAxiosError} from 'axios';
import {RegisterMutation, RegisterResponse, ValidationError} from '../../types';
import axiosApi from '../../axiosApi';

export const register = createAsyncThunk<
  RegisterResponse,
  RegisterMutation,
  { rejectValue: ValidationError }>(
  'users/register',
  async (form, {rejectWithValue}) => {
    try {
      const response = await axiosApi.post<RegisterResponse>('/users', form);
      return response.data;
    } catch (e) {
      if (isAxiosError(e) && e.response && e.response.status === 400) {
        return rejectWithValue(e.response.data);
      }
      throw e;
    }
  }
);

