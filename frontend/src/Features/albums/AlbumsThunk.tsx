import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';

export const getAlbumsByArtist = createAsyncThunk(
  'albums/get-by-artist',
  async (artistId: string) => {
    const response = await axiosApi.get(`albums?artist=${artistId}` );
    return response.data ?? [];
  });

export const getAlbumsById = createAsyncThunk(
  'albums/get-by-id',
  async (albumId: string) => {
    const response = await axiosApi.get(`albums/${albumId}` );
    return response.data ?? null;
  });


