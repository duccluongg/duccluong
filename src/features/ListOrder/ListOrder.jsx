import React from 'react';
import styles from './ListOrder.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useHistory } from 'react-router';

const ListOrder = () => {
  const history = useHistory();
  const toAcc = () => history.push('/profile');
  const toCart = () => history.push('/cart');
  const toOrder = () => history.push('/listOrder');
  
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
            <div className={styles.nameHeader}>lương lê</div>
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
          <div className={styles.itemOrder}>
            <div className={styles.row1}>
              <div className={styles.brandName}>Multishop</div>
              <div className={styles.status}>chưa gửi hàng</div>
            </div>
            <div className={styles.row2}>
              <div className={styles.left}>
                <div className={styles.info}>
                  <div className={styles.idCard}>Đơn hàng số: 1</div>
                  <div className={styles.itemName}>Tivi sam sung</div>
                  <div className={styles.phoneUser}>0964043693</div>
                  <div className={styles.payment}>thanh toán trực tiếp</div>
                  <div className={styles.details}>Xem chi tiết đơn hàng</div>
                </div>
                <div className={styles.listImg}>
                  <img
                    src="https://lh3.googleusercontent.com/JmGqy-74I-nERJEkaxa-gMuyv6qtWgoH2xqutvqaxeLewRMkWovrDLXyB9zfYw_vaPveDcJyy2QLEey3se31"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.priceBox}>
                <div className={styles.price}>20.000.000 đ</div>
              </div>
            </div>
            <div className={styles.row3}>
              <div className={styles.shipping}>
                {' '}
                Phí ship: <span>20.000.000 đ</span>
              </div>
              <div className={styles.totalPrice}>
                Tổng số tiền: <span>20.000.000 đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ListOrder;
