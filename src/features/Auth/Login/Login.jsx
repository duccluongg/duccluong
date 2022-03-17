import React from 'react';
import { useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { IconButton, InputAdornment, Button } from '@mui/material';
import Checkbox from '@material-ui/core/Checkbox';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grow from '@material-ui/core/Grow';
import styles from './Login.module.css';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [password, setPassWord] = useState('');
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleChangePass = (event) => setPassWord(event.target.value);

  return (
    <div className={styles.container}>
      <div className={styles.col7}></div>
      <Grow in timeout={1500}>
        <div className={styles.col3}>
          <div className={styles.box}>
            <div className={styles.header}>
              <i className="fas fa-laptop"></i>TechStore
            </div>
            <div className={styles.title}>Login to build your dream</div>
            <ValidatorForm className={styles.FormControl}>
              <div className={styles.boxText}>
                <TextValidator
                  fullWidth
                  type="text"
                  label="Username"
                  variant="filled"
                  name="username"
                  autoComplete="off"
                  // validators={['required', 'isEmail']}
                  // errorMessages={[
                  //   'Email is required',
                  //   'Email must be a valid email address',
                  // ]}
                  size="small"
                  className={styles.textField}
                />
              </div>
              <div className={styles.boxText1}>
                <TextValidator
                  fullWidth
                  autoComplete="current-password"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
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
                  //   checked={remember}
                  //   onChange={handleCheckBoxChange}
                  color="primary"
                ></Checkbox>
                <span>Remember me</span>
              </div>
              <div className={styles.button}>
                <Button variant="contained" color="success">
                  Login
                </Button>
              </div>
            </ValidatorForm>
            <div className={styles.toRegister}>
              You don't have account?{' '}
              <span onClick={() => history.push('/register')}>Sign Here</span>
            </div>
            <div className={styles.contact}>
              <div className={styles.subTitle}>Contact us at</div>
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
