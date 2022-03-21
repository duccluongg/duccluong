import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import styles from './DetailOrder.module.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
const DetailOrder = () => {
  const history = useHistory();
  const user = useSelector((s) => s.auth.info);
  const toAcc = () => history.push('/account');
  const toCart = () => history.push('/cart');
  const toOrder = () => history.push('/order');

  return (
    <React.Fragment>
      <Header />
      <div className={styles.container}>
        <div className={styles.col3}>
          <div className={styles.header}>
            <img
              alt="ava"
              src="https://st2.depositphotos.com/2703645/11476/v/450/depositphotos_114764528-stock-illustration-man-avatar-character.jpg"
              className={styles.imgHeader}
            />
            <div className={styles.nameHeader}>{user.name}</div>
          </div>
          <div className={styles.list}>
            <div className={styles.item1} onClick={toAcc}>
              <i className="far fa-user"></i>Tài khoản của tôi
            </div>
            <div className={styles.item1} onClick={toCart}>
              <i className="fas fa-shopping-cart"></i>Giỏ hàng
            </div>
            <div className={styles.item1} onClick={toOrder}>
              <i className="fas fa-list"></i>Đơn hàng
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default DetailOrder;
