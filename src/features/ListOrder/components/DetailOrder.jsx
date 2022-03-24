import React, { useEffect } from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import styles from './DetailOrder.module.css';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import FormatCash from '../../../utils/FormatCash';
import { getDetailOrder } from '../../CheckOut/CheckOutSlide';

const DetailOrder = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = useParams();
  const detail = useSelector((s) => s.order.detail) || {};
  const user = useSelector((s) => s.auth.info);
  const toAcc = () => history.push('/account');
  const toCart = () => history.push('/cart');
  const toOrder = () => history.push('/order');

  useEffect(() => {
    dispatch(getDetailOrder(id.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <div className={styles.col7}>
          <div className={styles.info}>
            <div className={styles.infoName}>
              Tên: <span>{detail?.name}</span>{' '}
            </div>
            <div className={styles.infoAddress}>
              Địa chỉ: <span>{detail?.address}</span>
            </div>
            <div className={styles.infoPhone}>
              Điện thoại: <span>{detail?.phone_number}</span>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.headerSub}>Đơn hàng số: {detail.id}</div>
            <div className={styles.listItems}>
              {detail?.items?.map((item) => (
                <div className={styles.item}>
                  <div className={styles.itemInfo}>
                    <img src={item.product.thumbnail} alt="" />
                    <div>
                      <div className={styles.itemName}>{item.product.name}</div>
                      <div className={styles.itemQuantity}>
                        x <span>{item.count}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.itemPrice}>
                    {' '}
                    {FormatCash(`${item.order_price}`)} đ
                  </div>
                </div>
              ))}
              <div className={styles.shipping}>
                <div>Phí ship</div>
                <span>{FormatCash(`${detail.shipping_fee}`)} đ</span>
              </div>
              <div className={styles.totalPrice}>
                <div>Tổng cộng</div>
                <span> {FormatCash(`${detail.total_cost}`)} đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default DetailOrder;
