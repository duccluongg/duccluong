import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productApi from '../api/productApi';

export const getProductByCategory = createAsyncThunk(
  'product/products by category',
  async (payload, { rejectWithValue }) => {
    const { categoryId, type } = payload;
    try {
      const response = await productApi.getProductAPi(categoryId);
      return {
        data: response.data.results,
        type,
      };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllProduct = createAsyncThunk(
  'product/All Product',
  async ({ rejectWithValue }) => {
    try {
      const response = await productApi.getAllProduct();
      return response.data.results;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: {
      section_1: {
        list: [],
        status: '',
        errorMessage: '',
      },
      section_2: {
        list: [],
        status: '',
        errorMessage: '',
      },
      section_3: {
        list: [],
        status: '',
        errorMessage: '',
      },
    },
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
    [getProductByCategory.pending]: (state, actions) => {
      const { type } = actions?.meta.arg || {};
      state.data[type].status = 'getProductCategory.pending';
    },
    [getProductByCategory.fulfilled]: (state, { payload }, actions) => {
      const { data = [], type } = payload;
      state.data[type].list = data;
      state.data[type].status = 'getProductCategory.fulfilled';
    },
    [getProductByCategory.rejected]: (state, { payload }) => {
      const { type } = payload;
      state.data[type].errorMessage = 'something went wrong';
      state.data[type].status = 'getProductCategory.rejected';
    },
  },
});
const { actions, reducer } = productSlice;
export default reducer;
export const { clearState } = actions;
