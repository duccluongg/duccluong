import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';
const Pagination = ({ pagination, onPageChange }) => {
  const { page, page_size, total } = pagination;
  const totalPages = Math.ceil(total / page_size);
  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

  const desPage = () => {
    handlePageChange(page - 1);
  };

  const upPage = () => {
    handlePageChange(page + 1);
  };

  return (
    <div className={styles.pagination}>
      <button className={styles.button} disabled={page <= 1} onClick={desPage}>
        <i className="fas fa-angle-left"></i>
      </button>
      <span>{page}</span>
      <button
        className={styles.button}
        disabled={page >= totalPages}
        onClick={upPage}
      >
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
  );
};
Pagination.propTypes = {
  pagination: PropTypes.shape({
    page: PropTypes.number.isRequired,
    page_size: PropTypes.number.isRequired,
    //  total: PropTypes.number.isRequired,
  }),
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  onPageChange: () => {},
};

export default Pagination;
