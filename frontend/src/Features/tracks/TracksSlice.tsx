import {createSlice} from '@reduxjs/toolkit';
import {getTracksByAlbumId} from './TracksThunk';
import {ITrack} from '../../types';


interface tracksState {
  tracks: ITrack[];
  isLoading: boolean;
  addLoading: boolean;
  isError: boolean;
}

const initialState: tracksState = {
  tracks: [],
  isLoading: false,
  addLoading: false,
  isError: false,
};



const TracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTracksByAlbumId.pending, (state) => {
      state.addLoading = true;
      state.isError = false;
    });
    builder.addCase(getTracksByAlbumId.fulfilled, (state, action) => {
      state.addLoading = false;
      state.tracks = action.payload;
    });
    builder.addCase(getTracksByAlbumId.rejected, (state) => {
      state.addLoading = false;
      state.isError = true;
    });
  }
});


export const TracksReducer = TracksSlice.reducer;