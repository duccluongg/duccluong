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
import PulseLoader from 'react-spinners/PulseLoader';
import ClipLoader from 'react-spinners/ClipLoader';
import ProductRelated from './components/ProductRelated/ProductRelated';
import Ratings from './components/Rating/Rating';

const ProductDetail = () => {
  const product = useSelector((s) => s.product.dataDetail) || {};
  const { id } = useParams();
  const productImg = product?.images;
  const categoryId = product?.category?.id;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [fullLoading, setFullLoading] = useState(false);

  useEffect(() => {
    dispatch(getProductDetail(id));
    setFullLoading(true);
    setTimeout(() => {
      setFullLoading(false);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
            {loading ? (
              <div className={styles.Loading}>
                <PulseLoader loading={loading} size={10} />
              </div>
            ) : (
              <div className={styles.col5}>
                <SliderImg productImg={productImg} />
              </div>
            )}
            {loading ? (
              <div className={styles.Loading}>
                <PulseLoader loading={loading} size={10} />
              </div>
            ) : (
              <div className={styles.col51}>
                <ProductInfo product={product} />
              </div>
            )}
          </div>
          <Ratings id={id} />
          <ProductRelated categoryId={categoryId} />
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ProductDetail;
