import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Cart.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  getListCart,
  IncrToCart,
  removeToCart,
  deleteFromCart,
  deleteListCart,
  clearState,
} from './CartSlice';
import FormatCash from '../../utils/FormatCash';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.cart.list);
  const user = useSelector((s) => s.auth.info);
  const cartId = cart.map((item) => item.id);
  const cartQuantity = useSelector((s) => s.cart.quantity);
  const [total, setTotal] = useState(0);
  const [fullLoading, setFullLoading] = useState(false);

  useEffect(() => {
    setFullLoading(true);
    setTimeout(() => {
      setFullLoading(false);
    }, 1500);
  }, []);

  const onIncrToCart = (data) => {
    dispatch(IncrToCart(data));
  };

  const onRemoveToCart = (data) => {
    dispatch(removeToCart(data));
  };

  const onDeleteFromCart = (data) => {
    dispatch(deleteFromCart(data));
  };

  const onDeleteListCart = () => {
    dispatch(deleteListCart(cartId));
    dispatch(clearState);
  };

  const totalPrice = () => {
    let tempTotal = 0;
    cart.map((item) => (tempTotal += item.product?.price * item.count));
    setTotal(tempTotal);
  };

  useEffect(() => {
    totalPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  useEffect(() => {
    dispatch(getListCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div>
      {fullLoading ? (
        <div className="sweetLoading">
          <ClipLoader loading={fullLoading} size={50} />
        </div>
      ) : (
        <React.Fragment>
          <Header />
          {user?.id ? (
            <React.Fragment>
              <div className="cart-container">
                <React.Fragment>
                  <h2>
                    Giỏ hàng{' '}
                    <span className="subTitle">{`${cartQuantity} (sản phẩm) `}</span>{' '}
                  </h2>
                  {cart.length === 0 ? (
                    <div className="cart-empty">
                      <img
                        src="https://rtworkspace.com/wp-content/plugins/rtworkspace-ecommerce-wp-plugin/assets/img/empty-cart.png"
                        alt="emtycart"
                      />
                      <div className="start-shopping">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-arrow-left"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                            />
                          </svg>
                          <span>Start Shopping</span>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="titles">
                        <h3 className="product-title">Product</h3>
                        <h3 className="price">Price</h3>
                        <h3 className="quantity">Quantity</h3>
                        <h3 className="total">Total</h3>
                      </div>
                      <div className="cart-items">
                        {cart?.map((item) => (
                          <div key={item.id} className="cart-item">
                            <div className="cart-product">
                              <img src={item?.product.thumbnail} alt="" />
                              <div className="boxName">
                                <h3 className="itemName">
                                  {item?.product.name}
                                </h3>
                                <button
                                  onClick={() => onDeleteFromCart(item?.id)}
                                >
                                  Xóa
                                </button>
                              </div>
                            </div>
                            <div className="cart-product-price">
                              {FormatCash((item?.product.price).toString())} đ
                            </div>
                            <div className="cart-product-quantity">
                              <button onClick={() => onRemoveToCart(item)}>
                                -
                              </button>
                              <div className="count">{item?.count}</div>
                              <button onClick={() => onIncrToCart(item)}>
                                +
                              </button>
                            </div>
                            <div className="cart-product-total-price">
                              {FormatCash(
                                (item?.product.price * item?.count).toString()
                              )}{' '}
                              đ
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="cart-summary">
                        <button
                          onClick={onDeleteListCart}
                          className="clear-btn"
                        >
                          Xóa tất cả
                        </button>
                        <div className="cart-checkout">
                          <div className="subtotal">
                            <span>Thành tiền</span>
                            <span className="amount">
                              {FormatCash(total.toString())} đ
                            </span>
                          </div>
                          <div className="btn">
                            <button className="button">Thanh toán ngay</button>
                          </div>
                          <div className="continue-shopping">
                            <Link to="/">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-arrow-left"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                />
                              </svg>
                              <span>Tiếp tục mua hàng</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              </div>
            </React.Fragment>
          ) : (
            <div className="needToLogin">
              <div className="needToLoginName">
                Bạn cần đăng nhập để xem giỏ hàng
              </div>
              <img
                src="https://rtworkspace.com/wp-content/plugins/rtworkspace-ecommerce-wp-plugin/assets/img/empty-cart.png"
                alt="emtycart"
              />
            </div>
          )}

          <Footer />
        </React.Fragment>
      )}
    </div>
  );
};

export default Cart;
