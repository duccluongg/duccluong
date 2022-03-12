import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
      <Header />
      <React.Fragment>
        <div className="cart-container">
          <React.Fragment>
            <h2>
              Giỏ hàng <span className="subTitle">{`( sản phẩm) `}</span>{' '}
            </h2>
            <div>
              <div className="titles">
                <h3 className="product-title">Product</h3>
                <h3 className="price">Price</h3>
                <h3 className="quantity">Quantity</h3>
                <h3 className="total">Total</h3>
              </div>
              <div className="cart-items">
                <div className="cart-item">
                  <div className="cart-product">
                    <img
                      src="https://lh3.googleusercontent.com/JmGqy-74I-nERJEkaxa-gMuyv6qtWgoH2xqutvqaxeLewRMkWovrDLXyB9zfYw_vaPveDcJyy2QLEey3se31"
                      alt=""
                    />
                    <div className="boxName">
                      <h3 className="itemName">ANDROID TIVI SONY FULL</h3>
                      <button>Xóa</button>
                    </div>
                  </div>
                  <div className="cart-product-price">10.000.000 đ</div>
                  <div className="cart-product-quantity">
                    <button>-</button>
                    <div className="count">2</div>
                    <button>+</button>
                  </div>
                  <div className="cart-product-total-price">10.000.000 đ</div>
                </div>
              </div>
              <div className="cart-summary">
                <button className="clear-btn">Xóa tất cả</button>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Thành tiền</span>
                    <span className="amount">10.000.000 đ</span>
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
          </React.Fragment>
        </div>
      </React.Fragment>
      <Footer />
    </div>
  );
};

export default Cart;
