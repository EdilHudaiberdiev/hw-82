import {createSlice} from '@reduxjs/toolkit';
import {IAlbum} from '../../types';
import {getAlbumsByArtist} from './AlbumsThunk';


interface albumsState {
  albums: IAlbum[];
  isLoading: boolean;
  addLoading: boolean;
  isError: boolean;
}

const initialState: albumsState = {
  albums: [],
  isLoading: false,
  addLoading: false,
  isError: false,
};



const AlbumsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAlbumsByArtist.pending, (state) => {
      state.addLoading = true;
      state.isError = false;
    });
    builder.addCase(getAlbumsByArtist.fulfilled, (state, action) => {
      state.addLoading = false;
      state.albums = action.payload;
    });
    builder.addCase(getAlbumsByArtist.rejected, (state) => {
      state.addLoading = false;
      state.isError = true;
    });
  }
});


export const AlbumsReducer = AlbumsSlice.reducer;