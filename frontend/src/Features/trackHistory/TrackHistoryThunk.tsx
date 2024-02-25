import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from '../../axiosApi';
import {RootState} from '../../app/store';

export const postTrackToHistoryById = createAsyncThunk(
  'track-history/post',
  async (id: string, thunkAPI) => {
    let state = thunkAPI.getState() as RootState;
    if (state?.users?.user?.token) {
    await axiosApi.post(`track-history`,{track: id}, {headers: {'Authorization': state.users.user.token}} );
    }
  });

export const getTrackToHistory = createAsyncThunk(
  'track-history/get',
  async (_arg, thunkAPI) => {
    let state = thunkAPI.getState() as RootState;
    if (state?.users?.user?.token) {
      const response = await axiosApi.get(`track-history`, {headers: {'Authorization': state.users.user.token}} );
      return response.data ?? [];
    }
  });




