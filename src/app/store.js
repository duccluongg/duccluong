import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../utils/ProductSlice';
import categoryReducer from '../utils/CategorySlice';
const rootReducer = {
  product: productReducer,
  category: categoryReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
