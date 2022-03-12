import React from 'react';
import styles from './ProductInfo.module.css';
import FormatCash from '../../../../constants/FormatCash';

const ProductInfo = ({ product }) => {
  return (
    <div className={styles.info}>
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
        <div className={styles.btn}>
          <button className={styles.button}>Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
