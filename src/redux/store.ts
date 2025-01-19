import { configureStore } from '@reduxjs/toolkit';
import aiDataReducer from './aiDataSlice';

const store = configureStore({
  reducer: {
    aiData: aiDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // Ensure this is exported

export default store;
