import { configureStore } from '@reduxjs/toolkit';
import shopReducer from '../features/counter/shopSlice';

export default configureStore({
  reducer: {
    shop: shopReducer,
  },
});
