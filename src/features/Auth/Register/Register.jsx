import React from 'react';
import { useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { IconButton, InputAdornment, Button } from '@mui/material';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import styles from './Register.module.css';

const Register = () => {
  const [password, setPassWord] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleChangePass = (event) => setPassWord(event.target.value);
  
  return (
    <div className={styles.container}>
      <div className={styles.col7}></div>
      <div className={styles.col3}>
        <div className={styles.box}>
          <div className={styles.header}>
            <i class="fas fa-laptop"></i>TechStore
          </div>
          <div className={styles.title}>Sign up for a great experience</div>
          <ValidatorForm className={styles.FormControl}>
            <div className={styles.boxText}>
              <div className={styles.name}>
                Username <span className={styles.required}>*</span>
              </div>
              <TextValidator
                fullWidth
                type="text"
                label="Username"
                variant="filled"
                name="username"
                autoComplete="off"
                size="small"
                className={styles.textField}
              />
            </div>
            <div className={styles.boxText}>
              <div className={styles.name}>
                Password <span className={styles.required}>*</span>
              </div>
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
            <div className={styles.boxText}>
              <div className={styles.name}>
                Email <span className={styles.required}>*</span>
              </div>
              <TextValidator
                fullWidth
                name="email"
                type="Email"
                variant="filled"
                label="Email"
                autoComplete="off"
                //   value={email}
                //   onChange={handleChangeEmail}
                size="small"
                validators={['required', 'isEmail']}
                className={styles.textField}
                errorMessages={[
                  'Nhập Email',
                  'Email must be a valid email address',
                ]}
              />
            </div>
            <div className={styles.boxText}>
              <div className={styles.name}>
                Name <span className={styles.required}>*</span>
              </div>
              <TextValidator
                fullWidth
                type="Text"
                label="Name"
                name="name"
                variant="filled"
                autoComplete="off"
                //   value={name}
                //   onChange={handleChangeName}
                size="small"
                validators={['required']}
                errorMessages={['Nhập tên', 'Không được để trống']}
                className={styles.textField}
              />
            </div>
            <div className={styles.boxText}>
              <div className={styles.name}>
                Address <span className={styles.required}>*</span>
              </div>
              <TextValidator
                fullWidth
                type="Text"
                label="Address"
                variant="filled"
                name="address"
                autoComplete="off"
                //   onChange={handleChangeAddress}
                //   value={address}
                size="small"
                validators={['required']}
                errorMessages={['Nhập địa chỉ', 'Không được để trống']}
                className={styles.textField}
              />
            </div>
            <div className={styles.boxText}>
              <div className={styles.name}>
                Phone <span className={styles.required}>*</span>
              </div>
              <TextValidator
                fullWidth
                type="Text"
                variant="filled"
                label="Phone"
                name="phone"
                autoComplete="off"
                //   onChange={handleChangePhone}
                //   value={phone}
                size="small"
                validators={['required']}
                errorMessages={['Nhập số điện thoại', 'Không được để trống']}
                className={styles.textField}
              />
            </div>
            <div className={styles.button}>
              <Button variant="contained" color="success">
                Sign in
              </Button>
            </div>
          </ValidatorForm>
          <div className={styles.toRegister}>
            Already have Account? <span>Login Here</span>
          </div>
          <div className={styles.contact}>
            <div className={styles.subTitle}>Contact us at</div>
            <div className={styles.icon}>
              <div className={styles.facebook}>
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className={styles.google}>
                <i class="fab fa-github"></i>
              </div>
              <div className={styles.twitter}>
                <i className="fab fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
