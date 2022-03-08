import React from 'react';
import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import Selection1 from './components/Selection1/Selection1';
import Selection2 from './components/Selection2/Selection2';
import Selection3 from './components/Selection3/Selection3';
import Selection4 from './components/Selection4/Selection4';
import Selection5 from './components/Selection5/Selection5';
import Footer from '../../components/Footer/Footer';
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
      <Selection2 />
      <Selection3 />
      <Selection4 />
      <Selection5 />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
