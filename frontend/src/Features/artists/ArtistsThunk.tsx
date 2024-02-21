import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from '../../axiosApi';


export const getArtists = createAsyncThunk(
  'artists/get-all',
  async () => {
    const response = await axiosApi.get(`artists` );
    return response.data ?? [];
  });

