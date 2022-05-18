import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryApi } from '../../utils/CategorySlice';
import { userInfor } from '../../features/Auth/AuthSlice';
import storageUser from '../../constants/storageUser';

const Header = () => {
  const user = useSelector((s) => s.auth.info);

  const history = useHistory();
  const category = useSelector((s) => s.category.list) || [];
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.cart.quantity) || 0;
  const [modal, setModal] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    dispatch(getCategoryApi());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(userInfor(storageUser.TOKEN));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (e) => {
    const temp = e.target.value;
    if (temp === '') {
      setSearchList([]);
    } else {
      const getApi = `http://localhost:3001/api/products/lite?page_size=5&search_name=${temp}`;
      axios.get(getApi).then((response) => {
        setSearchList(response.data.results);
      });
    }
  };
  console.log(searchList);

  const logout = () => {
    sessionStorage.removeItem(storageUser.TOKEN);
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
            {user?.id ? (
              <div className={styles.acc}>
                {user.name}
                <ul className={styles.notifyList}>
                  <Link to="/profile" className={styles.notifyItem}>
                    Thông tin cá nhân
                  </Link>
                  <Link to="/listorder" className={styles.notifyItem}>
                    Lịch sử đơn hàng
                  </Link>
                  <Link
                    to="/Login"
                    onClick={logout}
                    className={styles.notifyItem}
                  >
                    Đăng xuất
                  </Link>
                </ul>
              </div>
            ) : (
              <div className={styles.acc}>
                Tài khoản
                <ul className={styles.notifyList}>
                  <Link to="/login" className={styles.notifyItem}>
                    Đăng nhập
                  </Link>
                  <Link to="/register" className={styles.notifyItem}>
                    Đăng ký
                  </Link>
                </ul>
              </div>
            )}
            <Link to="/cart" className={styles.cart}>
              Giỏ hàng
              <i className="fas fa-shopping-cart">
                <span>{cart}</span>
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
