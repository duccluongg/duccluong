import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cartApi from '../../api/cartApi';

export const getListCart = createAsyncThunk(
  'cart/List Cart',
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

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
    status: '',
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.status = '';
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
    },
    [getListCart.rejected]: (state, { payload }) => {
      state.errorMessage = 'bị lỗi';
      state.status = 'getListCart.rejected';
    },
  },
});
const { actions, reducer } = cartSlice;
export default reducer;
export const { clearState } = actions;
