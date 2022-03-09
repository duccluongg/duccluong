import React from 'react';
import styles from '../CheckOut.module.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const SlideCheckOut = () => {
  return (
    <form className={styles.col6}>
      <div className={styles.headerSub}>Đơn hàng</div>
      <div className={styles.listItem}>
        <div className={styles.item}>
          <div className={styles.itemInfo}>
            <img
              src="https://lh3.googleusercontent.com/JmGqy-74I-nERJEkaxa-gMuyv6qtWgoH2xqutvqaxeLewRMkWovrDLXyB9zfYw_vaPveDcJyy2QLEey3se31"
              alt=""
            />
            <div>
              <div className={styles.itemName}>
                Android Tivi Sony Full HD 43 inch 43W800F
              </div>
              <div className={styles.itemQuantity}>x 1</div>
            </div>
          </div>
          <div className={styles.itemPrice}> 10.000.000 đ</div>
        </div>
        <div className={styles.totalPrice}>
          <div>Tổng cộng</div>
          <span> 10.000.000 đ</span>
        </div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Phương thức thanh toán
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Thanh toán bằng tiền mặt"
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Thanh toán bằng momo"
            />

            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Thanh toán bằng tài khoản ngân hàng"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={styles.btn}>
        <button className={styles.button}>Thanh toán</button>
      </div>
    </form>
  );
};

export default SlideCheckOut;
