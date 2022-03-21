import React, { useEffect, useState } from 'react';
import styles from './ListOrder.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getListOrder } from '../CheckOut/CheckOutSlide';
import FormatCash from '../../utils/FormatCash';
import CustomSnackBar from '../../components/CustomSnackBar/CustomSnackBar';
import ClipLoader from 'react-spinners/ClipLoader';

const ListOrder = () => {
  const history = useHistory();
  const toAcc = () => history.push('/profile');
  const toCart = () => history.push('/cart');
  const toOrder = () => history.push('/listOrder');
  const order = useSelector((s) => s.order.list);
  const user = useSelector((s) => s.auth.info);
  const [fullLoading, setFullLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListOrder());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFullLoading(true);
    setTimeout(() => {
      setFullLoading(false);
    }, 1500);
  }, []);

  const switchCase = (props) => {
    switch (props) {
      case 'waiting_confirm':
        return <div className={styles.needConfimed}>Đang chờ xác thực</div>;
      case 'confirmed':
        return <div className={styles.confimed}>Đã xác nhận</div>;
      case 'shipping':
        return <div className={styles.Shipping}>Đang vận chuyển</div>;
      case 'success':
        return <div className={styles.success}>Giao hàng thành công</div>;
      default:
        return <div></div>;
    }
  };

  return (
    <React.Fragment>
      <CustomSnackBar />

      {fullLoading ? (
        <div className="sweetLoading">
          <ClipLoader loading={fullLoading} size={50} />
        </div>
      ) : (
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
              {order.map((item) => (
                <div key={item.id} className={styles.itemOrder}>
                  <div className={styles.row1}>
                    <div className={styles.brandName}>Multishop</div>
                    <div className={styles.status}>
                      {switchCase(item.status)}
                    </div>
                  </div>
                  <div className={styles.row2}>
                    <div className={styles.left}>
                      <div className={styles.info}>
                        <div className={styles.idCard}>
                          Đơn hàng số: {item.id}
                        </div>
                        <div className={styles.itemName}>{item.name}</div>
                        <div className={styles.phoneUser}>
                          {item.phone_number}
                        </div>
                        <div className={styles.payment}>
                          {item.payment?.name}
                        </div>
                        <div className={styles.details}>
                          Xem chi tiết đơn hàng
                        </div>
                      </div>
                      <div className={styles.listImg}>
                        {item.items.map((items) => (
                          <img
                            key={items.id}
                            src={items.product.thumbnail}
                            alt=""
                          />
                        ))}
                      </div>
                    </div>
                    <div className={styles.priceBox}>
                      <div className={styles.price}>
                        {FormatCash(item.sum_price.toString())} đ
                      </div>
                    </div>
                  </div>
                  <div className={styles.row3}>
                    <div className={styles.shipping}>
                      {' '}
                      Phí ship:{' '}
                      <span>{FormatCash(item.shipping_fee.toString())} đ</span>
                    </div>
                    <div className={styles.totalPrice}>
                      Tổng số tiền:{' '}
                      <span>{FormatCash(item.total_cost.toString())} đ</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ListOrder;
