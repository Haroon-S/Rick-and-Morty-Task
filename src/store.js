import { configureStore } from '@reduxjs/toolkit';
import { publicApi } from './services/public';
import { serviceReducers } from './services';

const store = configureStore({
  reducer: {
    ...serviceReducers,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(publicApi.middleware),
});

export default store;