import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import orderApi from '../../api/orderApi';
import { showSnackbar } from '../../components/CustomSnackBar/snackBarSlide';
import { SNACK_BAR_TYPE } from '../../constants/snackBarType';

export const createOrder = createAsyncThunk(
  'createOrder',
  async ({ value, cart, user }, { rejectWithValue, dispatch }) => {
    try {
      const response = await orderApi.createOrder({
        name: user.name,
        address: user.address,
        phone_number: user.phone_number,
        payment: value,
        items: cart.map((item) => {
          return { product: item.product?.id, count: item.count };
        }),
      });
      dispatch(
        showSnackbar({
          type: SNACK_BAR_TYPE.SUCCESS,
          message: 'Thêm vào giỏ hàng thành công',
        })
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getListOrder = createAsyncThunk(
  'getListOrder',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await orderApi.getListOrder();
      return response.data.results;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    list: [],
    // quantity: 0,
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
    [getListOrder.pending]: (state) => {
      state.status = 'getListOrder.pending';
    },
    [getListOrder.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'getListOrder.fullfilled';
    },
    [getListOrder.rejected]: (state, { payload }) => {
      state.errorMessage = 'bị lỗi';
      state.status = 'getListCart.rejected';
    },
  },
});
const { actions, reducer } = orderSlice;
export default reducer;
export const { clearState } = actions;
