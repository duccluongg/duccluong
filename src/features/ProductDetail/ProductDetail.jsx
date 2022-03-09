import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SliderImg from './components/SliderImg/SliderImg';
import styles from './ProductDetails.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ProductInfo from './components/ProductInfo/ProductInfo';
import axios from 'axios';
import { useParams } from 'react-router';
const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const getApi = `https://yshuynh.pythonanywhere.com/api/products/${id}`;
      axios.get(getApi).then((response) => {
        setProduct(response.data);
      });
    }
  }, [id]);
  const productImg = product?.images;
  console.log(productImg);
  return (
    <React.Fragment>
      <Header />
      <div className={styles.container}>
        <div className={styles.col5}>
          <SliderImg productImg={productImg} />
        </div>
        <div className={styles.col51}>
          <ProductInfo product={product} />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ProductDetail;
