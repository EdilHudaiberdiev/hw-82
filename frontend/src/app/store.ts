import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {ArtistsReducer} from '../Features/artists/ArtistsSlice';
import {AlbumsReducer} from '../Features/albums/AlbumsSlice';
import {TracksReducer} from '../Features/tracks/TracksSlice';
import {usersReducer} from '../Features/users/UsersSlice';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';


const usersPersistConfig = {
  key: 'store:users',
  storage,
  whitelist: ['user'],
};

export const rootReducer = combineReducers({
  artists: ArtistsReducer,
  albums: AlbumsReducer,
  tracks: TracksReducer,
  users: persistReducer(usersPersistConfig, usersReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;