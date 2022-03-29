import React, { useState, useEffect } from 'react';
import styles from './Rating.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getListComment, postComment } from './RatingSlice';
import Rating from '@mui/material/Rating';
import { showSnackbar } from '../../../../components/CustomSnackBar/snackBarSlide';
import { SNACK_BAR_TYPE } from '../../../../constants/snackBarType';
import PulseLoader from 'react-spinners/PulseLoader';
const Ratings = ({ id }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [star, setStar] = React.useState(null);
  const isTextDisable = text.length === 0;
  const dispatch = useDispatch();
  const comment = useSelector((s) => s.rating.list);
  const user = useSelector((s) => s.auth.info);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(postComment({ text, id, star }));
    setText('');
    setStar(null);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(
        showSnackbar({
          type: SNACK_BAR_TYPE.success,
          message: 'Bình luận thành công',
        })
      );
    }, 1000);
  };

  useEffect(() => {
    dispatch(getListComment(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.commentTitle}>Đánh giá sản phẩm</div>
      {user?.id ? (
        <div className={styles.commentForm}>
          <form onSubmit={onSubmit}>
            <div className={styles.textAreaStyle}>
              <textarea
                className={styles.form}
                value={text}
                onChange={(e) => {
                  return setText(e.target.value);
                }}
              />
            </div>
            <Rating
              name="simple-controlled"
              value={star}
              onChange={(event, newValue) => {
                setStar(newValue);
              }}
            />
            <button disabled={isTextDisable} className={styles.btn}>
              Bình luận
            </button>
          </form>
        </div>
      ) : (
        <div className={styles.needToLogin}>
          {' '}
          Bạn cần phải đăng nhập để nhận xét
        </div>
      )}

      {loading ? (
        <div className={styles.sweetLoading}>
          <PulseLoader loading={loading} size={10} />
        </div>
      ) : (
        <div className={styles.listComment}>
          {comment.map((item) => (
            <div key={item.id} className={styles.comment}>
              <div className={styles.img}>
                <img
                  src="https://st2.depositphotos.com/2703645/11476/v/450/depositphotos_114764528-stock-illustration-man-avatar-character.jpg"
                  alt=""
                />
              </div>
              <div className={styles.infoComment}>
                <div className={styles.name}>{item.user?.name}</div>
                <div className={styles.dayComment}>
                  {item.created_at.substring(0, 10)}
                </div>
                <div className={styles.star}>
                  {Array(item.rate).fill(<i className="fas fa-star "></i>)}
                  {Array(5 - item.rate).fill(<i className="far fa-star"></i>)}
                </div>
                <div className={styles.content}>{item.comment}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ratings;
