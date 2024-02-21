import {createSlice} from '@reduxjs/toolkit';
import {getArtists} from './ArtistsThunk';
import {IArtist} from '../../types';


interface artistsState {
  artists: IArtist[];
  isLoading: boolean;
  addLoading: boolean;
  isError: boolean;
}

const initialState: artistsState = {
  artists: [],
  isLoading: false,
  addLoading: false,
  isError: false,
};



const ArtistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArtists.pending, (state) => {
      state.addLoading = true;
      state.isError = false;
    });
    builder.addCase(getArtists.fulfilled, (state, action) => {
      state.addLoading = false;
      state.artists = action.payload;
    });
    builder.addCase(getArtists.rejected, (state) => {
      state.addLoading = false;
      state.isError = true;
    });
  }
});


export const ArtistsReducer = ArtistsSlice.reducer;