import React, { useState, useEffect } from 'react';
import styles from '../CheckOut.module.css';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useSelector } from 'react-redux';
import FormatCash from '../../../utils/FormatCash';

const SlideCheckOut = ({ handleSubmit }) => {
  const cart = useSelector((s) => s.cart.list);
  const cartId = cart.map((item) => item.id);
  const [value, setValue] = React.useState(1);
  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState([]);

  const totalPrice = () => {
    let tempTotal = 0;
    cart.map((item) => (tempTotal += item.product?.price * item.count));
    setTotal(tempTotal);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    totalPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(value, cart, cartId);
    // setModal(!modal);
  };

  useEffect(() => {
    const getApi = 'http://localhost:3001/api/payments';
    axios.get(getApi).then((response) => {
      setPayment(response.data);
    });
  }, []);

  return (
    <form onSubmit={onSubmit} className={styles.col6}>
      <div className={styles.headerSub}>Đơn hàng</div>
      <div className={styles.listItem}>
        {cart.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.itemInfo}>
              <img src={item.product?.thumbnail} alt="" />
              <div>
                <div className={styles.itemName}>{item.product?.name}</div>
                <div className={styles.itemQuantity}>x {item.count}</div>
              </div>
            </div>
            <div className={styles.itemPrice}>
              {' '}
              {FormatCash(item.product?.price.toString())} đ
            </div>
          </div>
        ))}
        <div className={styles.totalPrice}>
          <div>Tổng cộng</div>
          <span>{FormatCash(total.toString())} đ</span>
        </div>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            {payment.map((item) => (
              <FormControlLabel
                key={item.id}
                value={item.id}
                control={<Radio />}
                label={item.name}
              />
            ))}
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
