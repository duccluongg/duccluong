import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ratingApi from '../../../../api/ratingApi';

export const getListComment = createAsyncThunk(
  'getListComment',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await ratingApi.getListComment(payload);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const postComment = createAsyncThunk(
  'postComment',
  async ({ text, id, star }, { rejectWithValue, dispatch }) => {
    try {
      const response = await ratingApi.postComment({
        product: id,
        comment: text,
        rate: star,
      });
      dispatch(getListComment(id));
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const ratingSlice = createSlice({
  name: 'rating',
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
    [getListComment.pending]: (state) => {
      state.status = 'getListComment.pending';
    },
    [getListComment.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'getListComment.fullfilled';
    },
    [getListComment.rejected]: (state, { payload }) => {
      state.errorMessage = 'bị lỗi';
      state.status = 'getListComment.rejected';
    },

    [postComment.pending]: (state) => {
      state.status = 'postComment.pending';
    },
    [postComment.fulfilled]: (state, { payload }) => {
      state.status = 'postComment.fullfilled';
    },
    [postComment.rejected]: (state, { payload }) => {
      state.errorMessage = 'bị lỗi';
      state.status = 'postComment.rejected';
    },
  },
});
const { actions, reducer } = ratingSlice;
export default reducer;
export const { clearState } = actions;
