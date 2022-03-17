import React, { useEffect } from 'react';
import styles from './Selection4.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../../../utils/ProductSlice';
// import FormatCash from '../../../../constants/FormatCash';
import { Link } from 'react-router-dom';
const Selection4 = () => {
  const dispatch = useDispatch();
  const product = useSelector((s) => s.product.dataDetail);
  useEffect(() => {
    dispatch(getProductDetail(19050026));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(product);
  return (
    <div className={styles.selection}>
      <div className={styles.box}>
        <div className={styles.box1}>
          <img
            src="https://i.pinimg.com/736x/46/1c/d2/461cd24ff136c48ad62de8147e48069c.jpg"
            alt=""
          />
        </div>
        <div className={styles.box2}>
          <div className={styles.header}>Thiết Bị Thông Minh</div>

          <img className="img" src={product.thumbnail} alt="First slide" />
          <div className={styles.name}>{product.name}</div>
          <div className={styles.price}>
            {/* {FormatCash(product?.sale_price.toString())} đ */}
          </div>
          <div className={styles.btn}>
            <Link to="/productDetail/19050026" className={styles.button}>
              Xem chi tiết sản phẩm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection4;
