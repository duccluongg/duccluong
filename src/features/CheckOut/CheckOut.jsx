import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './CheckOut.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InfoCheckOut from './Components/InfoCheckOut';
import SlideCheckOut from './Components/SlideCheckOut';
import { createOrder } from './CheckOutSlide';
import { deleteFromCart, clearState } from '../Cart/CartSlice';

const CheckOut = () => {
  const user = useSelector((s) => s.auth.info);
  const dispatch = useDispatch();
  const history = useHistory();

  const checkOut = (value, cart, cartId) => {
    dispatch(createOrder({ value, cart, user }));
    dispatch(deleteFromCart(cartId));
    dispatch(clearState);
    history.push('/listorder');
  };

  return (
    <React.Fragment>
      <Header />
      <div className={styles.container}>
        <InfoCheckOut />
        <SlideCheckOut handleSubmit={checkOut} />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default CheckOut;
