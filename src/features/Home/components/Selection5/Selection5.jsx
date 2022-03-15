import React from 'react';
import styles from './Selection5.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByCategory } from '../../../../utils/ProductSlice';
import { useHistory } from 'react-router';

const Selection5 = () => {
  const product = useSelector((s) => s.product.data.section_3.list) || [];
  const [category, setCategory] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductByCategory({ categoryId: 4, type: 'section_3' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getApi = `https://yshuynh.pythonanywhere.com/api/categories/4`;
    axios.get(getApi).then((response) => {
      setCategory(response.data);
    });
  }, []);

  const click = () => {
    history.push(`/productList/4`);
  };

  return (
    <div className={styles.selection}>
      <div className={styles.header}>
        <span className={styles.title}>{category.name}</span>
      </div>
      <div className={styles.grid__column10}>
        <div className={styles.home__product}>
          <div className={styles.grid__row}>
            {product.slice(0, 4).map((item) => (
              <Link
                to={`/productDetail/${item.id}`}
                key={item.id}
                className={styles.grid__column24}
              >
                <div className={styles.home__productitems}>
                  <div
                    className={styles.home__productitemsimg}
                    style={{
                      backgroundImage: `url(${item.thumbnail})`,
                    }}
                  ></div>
                  <h4 className={styles.home__productitemsname}>{item.name}</h4>
                  <div className={styles.home__productprice}>
                    <span className={styles.home__productitemsprice}>
                      {item.sale_price} đ
                    </span>
                    <div className={styles.btn_cart}>
                      <i className="fas fa-search"></i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.btn}>
        <button onClick={click} className={styles.button}>
          Xem tất cả sản phẩm
        </button>
      </div>
    </div>
  );
};

export default Selection5;
