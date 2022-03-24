import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../utils/ProductSlice';
import categoryReducer from '../utils/CategorySlice';
import authReducer from '../features/Auth/AuthSlice';
import snackbarReducer from '../components/CustomSnackBar/snackBarSlide';
import cartReducer from '../features/Cart/CartSlice';

const rootReducer = {
  product: productReducer,
  category: categoryReducer,
  auth: authReducer,
  snackbar: snackbarReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
