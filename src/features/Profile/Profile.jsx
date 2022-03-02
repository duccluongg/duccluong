import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Profile.module.css';
import { useHistory } from 'react-router';
const Profile = () => {
  const history = useHistory();
  const toAcc = () => history.push('/account');
  const toCart = () => history.push('/cart');
  const toOrder = () => history.push('/listOrder');
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.col3}>
          <div className={styles.header}>
            <img
              alt="ava"
              src="https://st2.depositphotos.com/2703645/11476/v/450/depositphotos_114764528-stock-illustration-man-avatar-character.jpg"
              className={styles.imgHeader}
            />
            <div className={styles.nameHeader}>luong le</div>
          </div>
          <div className={styles.list}>
            <div className={styles.item} onClick={toAcc}>
              <i className="far fa-user"></i>Tài khoản của tôi
            </div>
            <div className={styles.item} onClick={toCart}>
              <i className="fas fa-shopping-cart"></i>Giỏ hàng
            </div>
            <div className={styles.item} onClick={toOrder}>
              <i className="fas fa-list"></i>Đơn hàng
            </div>
          </div>
        </div>
        <div className={styles.col7}>
          <div className={styles.info}>
            <div className={styles.infoHeader}>Hồ sơ của tôi</div>
            <div className={styles.infoTitle}>
              Quản lý thông tin hồ sơ để bảo mật tài khoản
            </div>
          </div>
          <div className={styles.infoDetail}>
            <div className={styles.Detail}>
              <div className={styles.boxImg}>
                <img
                  src="https://st2.depositphotos.com/2703645/11476/v/450/depositphotos_114764528-stock-illustration-man-avatar-character.jpg"
                  alt="ava"
                  className={styles.imgDetail}
                />
                <div className={styles.boxName}>Luong le</div>
              </div>
              <div className={styles.listDetails}>
                <div className={styles.listItems}>
                  <div className={styles.itemDetails1}>Tên đăng nhập</div>
                  <div className={styles.itemDetails2}>duccluong</div>
                </div>
                <div className={styles.listItems}>
                  <div className={styles.itemDetails1}>Tên</div>
                  <div className={styles.itemDetails2}>Lương lê</div>
                </div>
                <div className={styles.listItems}>
                  <div className={styles.itemDetails1}>Email</div>
                  <div className={styles.itemDetails2}>
                    luongdang1999@gmail.com
                  </div>
                </div>
                <div className={styles.listItems}>
                  <div className={styles.itemDetails1}>Số điện thoại</div>
                  <div className={styles.itemDetails2}>0964043693</div>
                </div>
                <div className={styles.listItems}>
                  <div className={styles.itemDetails1}>Địa chỉ</div>
                  <div className={styles.itemDetails2}>
                    383 nguyen luong bang
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
