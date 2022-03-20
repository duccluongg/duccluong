import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SliderImg from './components/SliderImg/SliderImg';
import styles from './ProductDetails.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ProductInfo from './components/ProductInfo/ProductInfo';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../utils/ProductSlice';
import ClipLoader from 'react-spinners/ClipLoader';

const ProductDetail = () => {
  const product = useSelector((s) => s.product.dataDetail) || {};
  const { id } = useParams();
  const productImg = product?.images;
  const dispatch = useDispatch();
  const [fullLoading, setFullLoading] = useState(false);

  useEffect(() => {
    dispatch(getProductDetail(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFullLoading(true);
    setTimeout(() => {
      setFullLoading(false);
    }, 1500);
  }, []);

  return (
    <React.Fragment>
      {fullLoading ? (
        <div className={styles.sweetLoading}>
          <ClipLoader loading={fullLoading} size={50} />
        </div>
      ) : (
        <React.Fragment>
          <Header />
          <div className={styles.container}>
            <div className={styles.col5}>
              <SliderImg productImg={productImg} />
            </div>
            <div className={styles.col51}>
              <ProductInfo id={id} product={product} />
            </div>
          </div>
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ProductDetail;
