import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../utils/ProductSlice';
import categoryReducer from '../utils/CategorySlice';
import authReducer from '../features/Auth/AuthSlice';
import snackbarReducer from '../components/CustomSnackBar/snackBarSlide';
const rootReducer = {
  product: productReducer,
  category: categoryReducer,
  auth: authReducer,
  snackbar: snackbarReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
