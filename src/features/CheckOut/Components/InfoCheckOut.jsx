import React, { useEffect } from 'react';
import styles from '../CheckOut.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { userInfor } from '../../Auth/AuthSlice';
const InfoCheckOut = () => {
  const user = useSelector((s) => s.auth.info) || {};
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userInfor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.col4}>
      <div className={styles.header}>Thông tin nhận hàng</div>
      <div className={styles.listDetails}>
        <div className={styles.listItems}>
          <div className={styles.itemDetails1}>Tên</div>
          <div className={styles.itemDetails2}>{user.name}</div>
        </div>
        <div className={styles.listItems}>
          <div className={styles.itemDetails1}>Email</div>
          <div className={styles.itemDetails2}>{user.email}</div>
        </div>
        <div className={styles.listItems}>
          <div className={styles.itemDetails1}>Số điện thoại</div>
          <div className={styles.itemDetails2}>{user.phone_number}</div>
        </div>
        <div className={styles.listItems}>
          <div className={styles.itemDetails1}>Địa chỉ</div>
          <div className={styles.itemDetails2}>{user.address}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCheckOut;
