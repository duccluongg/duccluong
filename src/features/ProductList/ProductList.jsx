import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import styles from './ProductList.module.css';
import Header from '../../components/Header/Header';
import SlideBar from './components/SlideBar/SlideBar';
import Product from './components/Product/Product';
import { useParams } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Pagination from '../../components/Pagination/Pagination';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryApi } from '../../utils/CategorySlice';
import PulseLoader from 'react-spinners/PulseLoader';
import ClipLoader from 'react-spinners/ClipLoader';

const ProductList = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const category = useSelector((s) => s.category.list) || [];

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fullLoading, setFullLoading] = useState(true);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFullLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    setLoading(true);
    const param = queryString.stringify(filters);

    const getProductAPI = `http://ec2-18-144-28-197.us-west-1.compute.amazonaws.com/api/products?${param}&category=${id}`;
    axios
      .get(getProductAPI)
      .then((res) => {
        const { page, page_size, total, results } = res?.data;
        if (res?.data) {
          setProduct(results);
          setPagination({ page, page_size, total });
        }
        setLoading(false);
      })
      .catch((err) => {
        alert('Xảy ra lỗi');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {fullLoading ? (
        <div className={styles.sweetLoading}>
          <ClipLoader loading={fullLoading} size={50} />
        </div>
      ) : (
        <div>
          <Header />
          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.grid_row}>
                <div className={styles.col2}>
                  <SlideBar category={category} />
                </div>
                {loading ? (
                  <div className={styles.Loading}>
                    <PulseLoader loading={loading} size={10} />
                  </div>
                ) : (
                  <div className={styles.grid__column10}>
                    <Product product={product} />
                    <Pagination
                      pagination={pagination}
                      onPageChange={handlePageChange}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default ProductList;
