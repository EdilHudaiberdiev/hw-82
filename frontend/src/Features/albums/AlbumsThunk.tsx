import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';

export const getAlbumsByArtist = createAsyncThunk(
  'albums/get-by-artist',
  async (artistId: string) => {
    const response = await axiosApi.get(`albums?=${artistId}` );
    return response.data ?? [];
  });

