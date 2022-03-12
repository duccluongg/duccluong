import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './CheckOut.module.css';
import InfoCheckOut from './Components/InfoCheckOut';
import SlideCheckOut from './Components/SlideCheckOut';

const CheckOut = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.container}>
        <InfoCheckOut />
        <SlideCheckOut />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default CheckOut;
