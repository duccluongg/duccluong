import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Header = () => {
  const history = useHistory();
  const [category, setCategory] = useState([]);
  const [modal, setModal] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const toggleModal = () => setModal(!modal);
  
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
          <div className={styles.nameShop}>
            {' '}
            <i class="fas fa-laptop"></i>TECHSTORE
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
            <div className={styles.cart}>
              Giỏ hàng
              <i className="fas fa-shopping-cart">
                <span>1</span>
              </i>
            </div>
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
