import React, { useEffect } from 'react';
import { useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { IconButton, InputAdornment } from '@mui/material';
import Checkbox from '@material-ui/core/Checkbox';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grow from '@material-ui/core/Grow';
import styles from './Login.module.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, userLogin, clearState } from '../../Auth/AuthSlice';
import CustomSnackBar from '../../../components/CustomSnackBar/CustomSnackBar';
import { showSnackbar } from '../../../components/CustomSnackBar/snackBarSlide';
import { SNACK_BAR_TYPE } from '../../../constants/snackBarType';

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { isSuccess, errorMessage, isError } = useSelector(authSelector);
  const [remember, setRemember] = useState(false);

  const handleCheckBoxChange = () => {
    setRemember(!remember);
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleChangePass = (event) => setPassWord(event.target.value);

  const handleChangeEmail = (event) => setUserName(event.target.value);

  const handleSubmit = () => {
    dispatch(userLogin({ username, password, remember }));
  };

  useEffect(() => {
    if (isError) {
      dispatch(
        showSnackbar({ type: SNACK_BAR_TYPE.ERROR, message: errorMessage })
      );
      dispatch(clearState());
    }
    if (isSuccess) {
      dispatch(clearState());
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess]);

  return (
    <div className={styles.container}>
      <div className={styles.col7}></div>
      <CustomSnackBar />
      <Grow in timeout={1500}>
        <div className={styles.col3}>
          <div className={styles.box}>
            <div className={styles.header}>
              <i className="fas fa-laptop"></i>TechStore
            </div>
            <div className={styles.title}>Login to build your dream</div>
            <ValidatorForm
              className={styles.FormControl}
              onSubmit={handleSubmit}
            >
              <div className={styles.boxText}>
                <TextValidator
                  fullWidth
                  type="text"
                  label="Tài khoản"
                  variant="filled"
                  name="username"
                  autoComplete="off"
                  onChange={handleChangeEmail}
                  value={username}
                  size="small"
                  className={styles.textField}
                />
              </div>
              <div className={styles.boxText1}>
                <TextValidator
                  fullWidth
                  autoComplete="current-password"
                  type={showPassword ? 'text' : 'password'}
                  label="Mật khẩu"
                  variant="filled"
                  name="password"
                  onChange={handleChangePass}
                  value={password}
                  className={styles.textField}
                  size="small"
                  validators={['required', 'minStringLength:2']}
                  errorMessages={[
                    'PassWord is required',
                    'Must enter 8 characters',
                  ]}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className={styles.remember}>
                <Checkbox
                  checked={remember}
                  onChange={handleCheckBoxChange}
                  color="primary"
                ></Checkbox>
                <span>Remember me</span>
              </div>
              <div className={styles.button}>
                <button>Đăng Nhập</button>
              </div>
            </ValidatorForm>
            <div className={styles.toRegister}>
              Bạn không có tài khoản? Đăng kí{' '}
              <span onClick={() => history.push('/register')}>Tại đây</span>
            </div>
            <div className={styles.contact}>
              <div className={styles.subTitle}>Liên hệ tại</div>
              <div className={styles.icon}>
                <div className={styles.facebook}>
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className={styles.google}>
                  <i className="fab fa-github"></i>
                </div>
                <div className={styles.twitter}>
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grow>
    </div>
  );
};

export default Login;
