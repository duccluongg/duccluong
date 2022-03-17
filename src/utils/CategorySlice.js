import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoryApi from '../api/categoryApi';

export const getCategoryApi = createAsyncThunk(
  'category/ all category',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await categoryApi.getCategories();
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
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
    [getCategoryApi.pending]: (state) => {
      state.status = 'getCategoryApi.pending';
    },
    [getCategoryApi.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'getCategoryApi.fullfilled';
    },
    [getCategoryApi.rejected]: (state, { payload }) => {
      state.errorMessage = 'bị lỗi';
      state.status = 'getCategoryApi.rejected';
    },
  },
});
const { actions, reducer } = categorySlice;
export default reducer;
export const { clearState } = actions;
