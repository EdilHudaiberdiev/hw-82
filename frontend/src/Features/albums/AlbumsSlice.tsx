import {createSlice} from '@reduxjs/toolkit';
import {IAlbum} from '../../types';
import {getAlbumsByArtist, getAlbumsById} from './AlbumsThunk';


interface albumsState {
  albums: IAlbum[];
  album: IAlbum | null;
  isLoading: boolean;
  addLoading: boolean;
  isError: boolean;
}

const initialState: albumsState = {
  albums: [],
  album: null,
  isLoading: false,
  addLoading: false,
  isError: false,
};



const AlbumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAlbumsByArtist.pending, (state) => {
      state.addLoading = true;
      state.isError = false;
      state.albums = [];
      state.album = null;
    });
    builder.addCase(getAlbumsByArtist.fulfilled, (state, action) => {
      state.addLoading = false;
      state.albums = action.payload;
    });
    builder.addCase(getAlbumsByArtist.rejected, (state) => {
      state.addLoading = false;
      state.isError = true;
      state.albums = [];
    });

    builder.addCase(getAlbumsById.pending, (state) => {
      state.addLoading = true;
      state.isError = false;
      state.album = null;
    });
    builder.addCase(getAlbumsById.fulfilled, (state, action) => {
      state.addLoading = false;
      state.album = action.payload;
    });
    builder.addCase(getAlbumsById.rejected, (state) => {
      state.addLoading = false;
      state.isError = true;
      state.album = null;
    });
  }
});


export const AlbumsReducer = AlbumsSlice.reducer;