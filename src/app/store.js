import { configureStore } from '@reduxjs/toolkit';
import navResponsiveReducer from '../redux/slices/navResponsiveSlice';

export const store = configureStore({
  reducer: {
    mobile: navResponsiveReducer,
  },
});
