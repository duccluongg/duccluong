import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import styles from './ProductList.module.css';
import Header from '../../components/Header/Header';
import SlideBar from './components/SlideBar/SlideBar';
import Product from './components/Product/Product';
import { useLocation, useParams } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Pagination from '../../components/Pagination/Pagination';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryApi } from '../../utils/CategorySlice';

const ProductList = () => {
  const history = useHistory();
  const { id } = useParams();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const category = useSelector((s) => s.category.list) || [];
  const query = new URLSearchParams(search);
  const [product, setProduct] = useState([]);
  const [filters, setFilters] = useState({
    page_size: 12,
    page: 1,
  });
  const [pagination, setPagination] = useState({
    page: 1,
    page_size: 12,
    totalRows: 11,
  });

  useEffect(() => {
    dispatch(getCategoryApi());
  }, []);

  useEffect(() => {
    const param = queryString.stringify(filters);
    const brandId = query.get('brand');
    const getProductAPI = `https://yshuynh.pythonanywhere.com/api/products?${param}&category=${id}&brands=${brandId}`;
    axios
      .get(getProductAPI)
      .then((res) => {
        const { page, page_size, total, results } = res?.data;
        if (res?.data) {
          setProduct(results);
          setPagination({ page, page_size, total });
        }
      })
      .catch((err) => {
        alert('Xảy ra lỗi');
      });
  }, [id, filters]);

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      page: newPage,
    });
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.grid_row}>
            <div className={styles.col2}>
              <SlideBar category={category} />
            </div>
            <div className={styles.grid__column10}>
              <Product product={product} />
              <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
