import React, { useEffect } from 'react';
import styles from './ProductRelated.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { getProductRelated } from '../../../../utils/ProductSlice';
import { Link } from 'react-router-dom';
import FormatCash from '../../../../utils/FormatCash';
const ProductRelated = ({ categoryId }) => {
  const product = useSelector((s) => s.product.listData) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductRelated(categoryId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.selection}>
      <div className={styles.header}>
        <span className={styles.title}>Sản phẩm liên quan</span>
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
                      {FormatCash(item.sale_price.toString())} đ
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
    </div>
  );
};

export default ProductRelated;
