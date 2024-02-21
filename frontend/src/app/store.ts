import {configureStore} from '@reduxjs/toolkit';
import {ArtistsReducer} from '../Features/artists/ArtistsSlice';
import {AlbumsReducer} from '../Features/albums/AlbumsSlice';

export const store = configureStore({
  reducer: {
    artists: ArtistsReducer,
    albums: AlbumsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;