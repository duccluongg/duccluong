import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../utils/ProductSlice';
import categoryReducer from '../utils/CategorySlice';
import authReducer from '../features/Auth/AuthSlice';
import snackbarReducer from '../components/CustomSnackBar/snackBarSlide';
import cartReducer from '../features/Cart/CartSlice';
import orderReducer from '../features/CheckOut/CheckOutSlide';
import ratingReducer from '../features/ProductDetail/components/Rating/RatingSlice';
const rootReducer = {
  product: productReducer,
  category: categoryReducer,
  auth: authReducer,
  snackbar: snackbarReducer,
  cart: cartReducer,
  order: orderReducer,
  rating: ratingReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
