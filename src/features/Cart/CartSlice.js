import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cartApi from '../../api/cartApi';
import { showSnackbar } from '../../components/CustomSnackBar/snackBarSlide';
import { SNACK_BAR_TYPE } from '../../constants/snackBarType';

export const getListCart = createAsyncThunk(
  'getListCart',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await cartApi.getListCart();
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const addToCart = createAsyncThunk(
  'addToCart',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await cartApi.addToCart({
        product: payload.product.id,
        count: 1,
      });
      dispatch(
        showSnackbar({
          type: SNACK_BAR_TYPE.SUCCESS,
          message: 'Thêm vào giỏ hàng thành công',
        })
      );
      dispatch(getListCart());
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const IncrToCart = createAsyncThunk(
  'IncrToCart',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await cartApi.IncrToCart({
        product: payload.product.id,
        count: 1,
      });
      dispatch(getListCart());
      return { ...response.data };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeToCart = createAsyncThunk(
  'removeToCart',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await cartApi.removeToCart({
        product: payload.product.id,
        count: 1,
      });
      dispatch(getListCart());
      return { ...response.data };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteFromCart = createAsyncThunk(
  'deleteFromCart',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await cartApi.deleteFromCart(payload);
      dispatch(getListCart());
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteListCart = createAsyncThunk(
  'deleteListCart',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await cartApi.delListCart(payload);
      dispatch(getListCart());
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
    quantity: 0,
    status: '',
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.status = '';
      state.list = [];
      state.quantity = 0;
      return state;
    },
  },
  extraReducers: {
    [getListCart.pending]: (state) => {
      state.status = 'getListCart.pending';
    },
    [getListCart.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'getListCart.fullfilled';
      state.quantity = payload.length;
    },
    [getListCart.rejected]: (state, { payload }) => {
      state.errorMessage = 'bị lỗi';
      state.status = 'getListCart.rejected';
    },

    [deleteListCart.pending]: (state) => {
      state.status = 'deleteListCart.pending';
    },
    [deleteListCart.fulfilled]: (state, { payload }) => {
      state.list = [];
      state.status = 'deleteListCart.fullfilled';
      state.quantity = 0;
    },
    [deleteListCart.rejected]: (state, { payload }) => {
      state.errorMessage = 'bị lỗi';
      state.status = 'deleteListCart.rejected';
    },
  },
});
const { actions, reducer } = cartSlice;
export default reducer;
export const { clearState } = actions;
