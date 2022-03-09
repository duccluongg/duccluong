import React from 'react';
import styles from '../CheckOut.module.css';
const InfoCheckOut = () => {
  return (
    <div className={styles.col4}>
      <div className={styles.header}>Thông tin nhận hàng</div>
      <div className={styles.listDetails}>
        <div className={styles.listItems}>
          <div className={styles.itemDetails1}>Tên</div>
          <div className={styles.itemDetails2}>lương lê</div>
        </div>
        <div className={styles.listItems}>
          <div className={styles.itemDetails1}>Email</div>
          <div className={styles.itemDetails2}>luongdang1999@gmail.com</div>
        </div>
        <div className={styles.listItems}>
          <div className={styles.itemDetails1}>Số điện thoại</div>
          <div className={styles.itemDetails2}>0964043693</div>
        </div>
        <div className={styles.listItems}>
          <div className={styles.itemDetails1}>Địa chỉ</div>
          <div className={styles.itemDetails2}>49/12 Lê Duẩn</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCheckOut;
