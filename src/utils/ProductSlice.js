import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productApi from '../api/productApi';

export const getProductByCategory = createAsyncThunk(
  'getProductByCategory',
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
export const getProductDetail = createAsyncThunk(
  'getProductDetail',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await productApi.getProductDetail(payload);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllProduct = createAsyncThunk(
  'getAllProduct',
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

export const getProductRelated = createAsyncThunk(
  'getProductRelated ',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await productApi.getProductRelated(payload);
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
    listData: [],
    dataDetail: {},
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

    [getProductDetail.pending]: (state) => {
      state.status = 'getProductDetail.pending';
    },
    [getProductDetail.fulfilled]: (state, { payload }) => {
      state.status = 'getProductDetail.fulfilled';
      state.dataDetail = payload;
    },
    [getProductDetail.rejected]: (state, { payload }) => {
      state.status = 'getProductDetail.rejected';
      state.errorMessage = 'bị lỗi';
    },

    [getProductRelated.pending]: (state) => {
      state.status = 'getProductRelated.pending';
    },
    [getProductRelated.fulfilled]: (state, { payload }) => {
      state.status = 'getProductRelated.fulfilled';
      state.listData = payload;
    },
    [getProductRelated.rejected]: (state, { payload }) => {
      state.status = 'getProductRelated.rejected';
      state.errorMessage = 'bị lỗi';
    },
  },
});
const { actions, reducer } = productSlice;
export default reducer;
export const { clearState } = actions;
