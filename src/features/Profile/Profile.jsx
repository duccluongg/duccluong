import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Profile.module.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { userInfor } from '../Auth/AuthSlice';
import UpdateProfle from './components/UpdateProfile/UpdateProfle';
import PulseLoader from 'react-spinners/PulseLoader';
import CustomSnackBar from '../../components/CustomSnackBar/CustomSnackBar';

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const user = useSelector((s) => s.auth.info) || {};
  const history = useHistory();
  const toAcc = () => history.push('/profile');
  const toCart = () => history.push('/cart');
  const toOrder = () => history.push('/listOrder');
  const dispatch = useDispatch();
  const img = require('../../assets/ava1.jpg');
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    dispatch(userInfor());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <CustomSnackBar />
      <Header />
      <div className={styles.container}>
        <div className={styles.col3}>
          <div className={styles.header}>
            <img alt="ava" src={img} className={styles.imgHeader} />
            <div className={styles.nameHeader}>{user.name}</div>
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
            {loading ? (
              <div className={styles.loading}>
                <PulseLoader loading={loading} size={10} />
              </div>
            ) : (
              <div className={styles.Detail}>
                <div className={styles.boxImg}>
                  <img src={img} alt="ava" className={styles.imgDetail} />
                  <div className={styles.boxName}>{user.name}</div>
                </div>
                <div className={styles.listDetails}>
                  <div className={styles.listItems}>
                    <div className={styles.itemDetails1}>Tên đăng nhập</div>
                    <div className={styles.itemDetails2}>{user.username}</div>
                  </div>
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
                    <div className={styles.itemDetails2}>
                      {user.phone_number}
                    </div>
                  </div>
                  <div className={styles.listItems}>
                    <div className={styles.itemDetails1}>Địa chỉ</div>
                    <div className={styles.itemDetails2}>{user.address}</div>
                  </div>
                  <button className={styles.button} onClick={showModal}>
                    Thay đổi thông tin
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {modal && (
          <div className={styles.modal}>
            <div className={styles.overLay}>
              <UpdateProfle closeModal={closeModal} setLoading={setLoading} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
