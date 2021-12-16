import { configureStore } from '@reduxjs/toolkit';
import headerSlice from '../redux/slices/headerSlice';
import navResponsiveReducer from '../redux/slices/navResponsiveSlice';

export const store = configureStore({
  reducer: {
    mobile: navResponsiveReducer,
    headerReducer: headerSlice
  },
});
