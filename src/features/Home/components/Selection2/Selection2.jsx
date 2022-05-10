import React from 'react';
import styles from './Selection2.module.css';
import { useHistory } from 'react-router-dom';

const Selection2 = () => {
  const history = useHistory();

  const toProductList = () => {
    history.push('./productList/1');
  };

  const dataImg = [
    'https://i.pinimg.com/564x/bd/8f/4d/bd8f4df307db430521a7228c584c0feb.jpg',
    'https://i.pinimg.com/736x/2f/ad/74/2fad74a03b0362fc76b4da1d2b652f27.jpg',
    'https://tmdpc.vn/media/news/0712_pc-gaming-gia-re.jpg',
    'https://www.hanoicomputer.vn/media/lib/17-09-2020/cauhinhmaytinhchigame2020.jpg',
    'https://i.pinimg.com/736x/18/27/75/1827759333e28fd130b701847796e372.jpg',
    'https://i2.wp.com/www.theweddingvowsg.com/wp-content/uploads/2021/09/10-Best-Gaming-PC-in-Malaysia-2021.jpg?w=1000&ssl=1',
    'https://i.pinimg.com/originals/a4/a5/9d/a4a59dd3720921ad90b8aacaf0bfe368.jpg',
    'https://1.bp.blogspot.com/-wsFHUVRfODc/X7toIcrduhI/AAAAAAAAA_s/XjR0iRYOj5kZxhRdQAuhmOVeA2A7aqI4wCLcBGAsYHQ/s2048/techontop-huong-dan-trang-tri-goc-choi-game-1.jpg',
  ];

  return (
    <div className={styles.selection}>
      <div className={styles.container}>
        <div className={styles.blockTitle}>
          <div className={styles.title1}>SHOP THE LOOKS</div>
          <div className={styles.title2}>
            Our latest endeavour features designs from around the world with
            materials so comfortable you won't want to wear anything else every
            again.
          </div>
        </div>
        <div className={styles.wrapper}>
          {dataImg.map((item, index) => (
            <div key={index} className={styles.box}>
              <div className={styles.parent}>
                <div className={styles.modal}></div>
                <img src={item} className={styles.child} alt={item} />
                <div className={styles.content}>
                  <div className={styles.btn}>
                    <button onClick={toProductList} className={styles.button}>
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selection2;
