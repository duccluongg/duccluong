import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryApi } from '../../utils/CategorySlice';

const Header = () => {
  const history = useHistory();
  const category = useSelector((s) => s.category.list) || [];
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    dispatch(getCategoryApi());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (e) => {
    const temp = e.target.value;
    if (temp === '') {
      setSearchList([]);
    } else {
      const getApi = `https://yshuynh.pythonanywhere.com/api/products/lite?page_size=10&search_name=${temp}`;
      axios.get(getApi).then((response) => {
        setSearchList(response.data.results);
      });
    }
  };

  return (
    <React.Fragment>
      <div className={styles.Header}>
        <div className={styles.container}>
          <div className={styles.nameShop}>
            {' '}
            <i className="fas fa-laptop"></i>TECHSTORE
          </div>
          <div className={styles.info}>
            <div onClick={toggleModal} className={styles.search}>
              <i className="fas fa-search"></i>
            </div>
            <div className={styles.acc}>
              Tài khoản
              <ul className={styles.notifyList}>
                <div
                  onClick={() => history.push('/login')}
                  className={styles.notifyItem}
                >
                  Đăng nhập
                </div>
                <div
                  onClick={() => history.push('/register')}
                  className={styles.notifyItem}
                >
                  Đăng ký
                </div>
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
      {modal && (
        <div className={styles.modal}>
          <div className={styles.overLay}>
            <div>
              <div className={styles.searchBox}>
                <i className="fas fa-search"></i>
                <input
                  className={styles.searchTxt}
                  type="text"
                  name="productName_contains"
                  placeholder="Type to search"
                  onKeyUp={handleSearch}
                  autoComplete="off"
                />

                <i onClick={toggleModal} className="fas fa-times"></i>
              </div>
              <div className={styles.listSearch}>
                {searchList.map((item) => (
                  <div
                    onClick={() => history.push(`/productDetail/${item.id}`)}
                    key={item.id}
                    className={styles.itemSearch}
                  >
                    <img src={item.thumbnail} alt="thumbnail" />
                    <div className={styles.nameItem}>{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;
