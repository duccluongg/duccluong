import React from 'react';

import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import Selection1 from './components/Selection1/Selection1';
const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.slider}>
        <figure>
          <div className={styles.sliderImg}>
            <div className={styles.modal}>
              <div className={styles.header}>TECHSTORE</div>
              <div className={styles.title}>Build Your Dream </div>
            </div>
          </div>
        </figure>
      </div>
      <Selection1 />
    </React.Fragment>
  );
};

export default Home;
