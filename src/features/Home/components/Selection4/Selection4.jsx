import React from 'react';
import styles from './Selection4.module.css';
const Selection4 = () => {
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
          <div className={styles.header}>Top Trending</div>

          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_a5f6af0e-b13e-47bb-883f-bd586149cbad_360x.jpg?v=1614069709"
            alt="First slide"
          />
          <div className={styles.name}>Faux suede biker jacket</div>
          <div className={styles.price}>60.00$</div>
        </div>
      </div>
    </div>
  );
};

export default Selection4;
