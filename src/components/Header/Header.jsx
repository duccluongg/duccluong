import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
const Header = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategoryAPI = 'https://yshuynh.pythonanywhere.com/api/categories';
    axios
      .get(getCategoryAPI)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert('Xảy ra lỗi');
      });
  }, []);
  return (
    <React.Fragment>
      <div className={styles.Header}>
        <div className={styles.container}>
          <div>TECHSTORE</div>
          <div className={styles.info}>
            <div className={styles.search}>
              <i className="fas fa-search"></i>
            </div>
            <div className={styles.acc}>
              Tài khoản
              <ul className={styles.notifyList}>
                <div className={styles.notifyItem}>Đăng nhập</div>
                <div className={styles.notifyItem}>Đăng ký</div>
              </ul>
            </div>
            <Link to="/cart" className={styles.cart}>
              Giỏ hàng
              <i className="fas fa-shopping-cart">
                <span>1</span>
              </i>
            </Link>
          </div>
        </div>
        <div className={styles.border}></div>
        <div className={styles.sideBar}>
          <Link to="/" className={styles.sideBarItem}>
            Trang chủ
          </Link>
          {category.map((item) => (
            <Link
              to={`/productList/${item.id}`}
              key={item.id}
              className={styles.sideBarItem}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
