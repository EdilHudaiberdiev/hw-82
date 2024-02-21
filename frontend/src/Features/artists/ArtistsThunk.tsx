import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from '../../axiosApi';


export const getArtists = createAsyncThunk(
  'artists/get-all',
  async () => {
    const response = await axiosApi.get(`artists` );
    return response.data ?? [];
  });

export const getArtistById = createAsyncThunk(
  'artists/get-by-id',
  async (id: string) => {
    const response = await axiosApi.get(`artists/${id}` );
    return response.data ?? null;
  });



