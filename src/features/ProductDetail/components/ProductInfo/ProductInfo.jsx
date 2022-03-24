import React from 'react';
import styles from './ProductInfo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import FormatCash from '../../../../constants/FormatCash';
import { addToCart } from '../../../Cart/CartSlice';
import CustomSnackBar from '../../../../components/CustomSnackBar/CustomSnackBar';

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.info);

  const addCart = () => {
    dispatch(addToCart({ product: product }));
  };

  return (
    <div className={styles.info}>
      <CustomSnackBar />
      <h4 className={styles.ProductName}>{product?.name}</h4>
      <h5 className={styles.ProductBand}>{product?.brand?.name}</h5>
      <div
        className={styles.ProductDescription}
        dangerouslySetInnerHTML={{ __html: product?.short_description }}
      ></div>
      <div className={styles.ProductCartWapper}>
        <div className={styles.ProductPriceWapper}>
          {FormatCash(`${product?.sale_price}`)} đ
        </div>
        <div className={styles.ProductPriceSale}>
          {FormatCash(`${product?.price}`)} đ
        </div>
        {user?.id ? (
          <div className={styles.btn}>
            <button onClick={addCart} className={styles.button}>
              Thêm vào giỏ hàng
            </button>
          </div>
        ) : (
          <div className={styles.needToLogin}>
            {' '}
            Bạn cần phải đăng nhập để mua sản phẩm
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
