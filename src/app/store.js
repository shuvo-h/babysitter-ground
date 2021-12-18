import { configureStore } from '@reduxjs/toolkit';
import babysDaySlice from '../redux/slices/babysDaySlice';
import bookingSitterSlice from '../redux/slices/bookingSitterSlice';
import dashboardSlice from '../redux/slices/dashboardSlice';
import headerSlice from '../redux/slices/headerSlice';
import navResponsiveReducer from '../redux/slices/navResponsiveSlice';
import serviceSlice from '../redux/slices/serviceSlice';
import teamMemberSlice from '../redux/slices/teamMemberSlice';

export const store = configureStore({
    reducer: {
      mobile: navResponsiveReducer,
      headerReducer: headerSlice,
      services: serviceSlice,
      babysDayOut: babysDaySlice,
      dashboard: dashboardSlice,
      bookingInfo: bookingSitterSlice,
      teamMembers: teamMemberSlice
    },
});
