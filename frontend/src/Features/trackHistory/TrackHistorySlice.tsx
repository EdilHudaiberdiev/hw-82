import {getTrackToHistory, postTrackToHistoryById} from './TrackHistoryThunk';
import {createSlice} from '@reduxjs/toolkit';
import {ITrackHistory} from '../../types';

interface tracksHistoryState {
  isLoading: boolean;
  addLoading: boolean;
  isError: boolean;
  trackHistory: ITrackHistory[];
}

const initialState: tracksHistoryState = {
  isLoading: false,
  addLoading: false,
  isError: false,
  trackHistory: [],
};

const TracksHistorySlice = createSlice({
  name: 'track-history',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postTrackToHistoryById.pending, (state) => {
      state.addLoading = true;
      state.isError = false;
    });
    builder.addCase(postTrackToHistoryById.fulfilled, (state) => {
      state.addLoading = false;
    });
    builder.addCase(postTrackToHistoryById.rejected, (state) => {
      state.addLoading = false;
      state.isError = true;
    });
    builder.addCase(getTrackToHistory.pending, (state) => {
      state.addLoading = true;
      state.isError = false;
    });
    builder.addCase(getTrackToHistory.fulfilled, (state, action) => {
      state.trackHistory = action.payload;
      state.addLoading = false;
    });
    builder.addCase(getTrackToHistory.rejected, (state) => {
      state.addLoading = false;
      state.isError = true;
    });
  }
});


export const TracksHistoryReducer = TracksHistorySlice.reducer;