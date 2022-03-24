import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.grid__row}>
          <div className={styles.grid__column24}>
            <h3 className={styles.footer__heading}>Multishop</h3>
            <ul className={styles.footer__list}>
              <li className={styles.footer__items}>
                <i className="fas fa-map-marker-alt"></i>
                <Link to="" className={styles.footer__link}>
                  54 Nguyen Luong Bang, Lien Chieu, Da Nang
                </Link>
              </li>
              <li className={styles.footer__items}>
                <i className="fas fa-phone-alt"></i>
                <Link to="" className={styles.footer__link}>
                  1900 6555
                </Link>
              </li>
              <li className={styles.footer__items}>
                <i className="fas fa-envelope"></i>
                <Link to="" className={styles.footer__link}>
                  luongdang1999@gmail.com
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.grid__column24}>
            <h3 className={styles.footer__heading}>ORDERS AND RETURNS</h3>
            <ul className={styles.footer__list}>
              <li className={styles.footer__items}>
                <Link to="" className={styles.footer__link}>
                  Help and advice
                </Link>
              </li>
              <li className={styles.footer__items}>
                <Link to="" className={styles.footer__link}>
                  Shippintg & Returns
                </Link>
              </li>
              <li className={styles.footer__items}>
                <Link to="" className={styles.footer__link}>
                  Terms and conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.grid__column24}></div>
          <div className={styles.grid__column24}>
            <h3 className={styles.footer__heading}>MY ACCOUNT</h3>
            <ul className={styles.footer__list}>
              <li className={styles.footer__items}>
                <Link to="" className={styles.footer__link}>
                  Login
                </Link>
              </li>
              <li className={styles.footer__items}>
                <Link to="" className={styles.footer__link}>
                  Register
                </Link>
              </li>
              <li className={styles.footer__items}>
                <Link to="" className={styles.footer__link}>
                  My Wishlist
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.grid__column24}>
            <h3 className={styles.footer__heading}>FOLLOW US ON</h3>
            <ul className={styles.footer__list}>
              <li className={styles.footer__items}>
                <Link to="" className={styles.footer__link}>
                  <i className="fab fa-facebook"></i>
                  Facebook
                </Link>
              </li>
              <li className={styles.footer__items}>
                <Link to="" className={styles.footer__link}>
                  <i className="fab fa-instagram"></i>
                  Insta
                </Link>
              </li>
              <li className={styles.footer__items}>
                <Link to="" className={styles.footer__link}>
                  <i className="fab fa-google"></i>
                  Google
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
