import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './reducers/cardReducer';

const store = configureStore({
  reducer: {
    card: cardReducer,
    // other reducers if any
  },
  // Additional configuration options if needed
});

export default store;
