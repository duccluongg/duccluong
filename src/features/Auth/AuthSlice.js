import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import storageUser from '../../constants/storageUser';
import userApi from '../../api/userApi';

export const userLogin = createAsyncThunk(
  'user/login',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await userApi.userLogin(payload);

      if (payload.remember)
        localStorage.setItem(storageUser.TOKEN, response.data.access_token);
      else
        sessionStorage.setItem(storageUser.TOKEN, response.data.access_token);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const userRegister = createAsyncThunk(
  'user/register',
  async (
    { userName, email, passWord, address, name, phone },
    { rejectWithValue }
  ) => {
    try {
      console.log(userName, email, passWord, address, name, phone);
      const response = await userApi.userRegister({
        username: userName,
        email: email,
        password: passWord,
        address: address,
        name: name,
        phone: phone,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const userInfor = createAsyncThunk(
  'user/ user Infor',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await userApi.userInfor();
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isRequesting: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    info: {},
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isRequesting = false;
      state.isSuccess = false;
      return state;
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.isRequesting = true;
      state.isSuccess = false;
      state.isError = false;
    },
    [userLogin.fulfilled]: (state) => {
      state.isRequesting = false;
      state.isSuccess = true;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.isRequesting = false;
      state.isError = true;
      state.errorMessage = 'Sai tên đăng nhập hoặc mật khẩu';
    },
    [userRegister.pending]: (state) => {
      state.isFetching = true;
      state.isSuccess = false;
      state.isError = false;
    },
    [userRegister.fulfilled]: (state, { payload }) => {
      state.isSuccess = true;
    },
    [userRegister.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = 'Tài khoản đã tồn tại';
    },
    [userInfor.pending]: (state) => {
      state.status = 'userInfor.pending';
    },
    [userInfor.fulfilled]: (state, { payload }) => {
      state.info = payload;
      state.status = 'userInfor.fullfilled';
    },
    [userInfor.rejected]: (state, { payload }) => {
      state.errorMessage = 'bị lỗi';
      state.status = 'userInfor.rejected';
    },
  },
});

const { actions, reducer } = authSlice;
export const authSelector = (state) => state.auth;
export default reducer;
export const { clearState } = actions;
