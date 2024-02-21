import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from '../../axiosApi';


export const getTracksByAlbumId = createAsyncThunk(
  'tracks/get-by-album-id',
  async (albumId) => {
    const response = await axiosApi.get(`tracks?album=${albumId}` );
    return response.data ?? [];
  });

