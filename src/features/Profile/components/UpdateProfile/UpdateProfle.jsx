import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../Profile.module.css';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Grow from '@material-ui/core/Grow';
import { changeInfor } from '../../../Auth/AuthSlice';
import { showSnackbar } from '../../../../components/CustomSnackBar/snackBarSlide';
import { SNACK_BAR_TYPE } from '../../../../constants/snackBarType';

const UpdateProfle = ({ closeModal, setLoading }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeAdress = (e) => setAdress(e.target.value);
  const handleChangePhone = (e) => setPhone(e.target.value);

  const handleSubmit = () => {
    dispatch(changeInfor({ name, email, address, phone }));
    closeModal();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    dispatch(
      showSnackbar({
        type: SNACK_BAR_TYPE.success,
        message: 'Cập nhật thành công',
      })
    );
  };

  return (
    <Grow in timeout={500}>
      <div className={styles.modalContent}>
        <div className={styles.notify}>
          <div>Thay đổi thông tin</div>
          <div className={styles.closeModal} onClick={closeModal}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className={styles.boxInfo}>
          <ValidatorForm onSubmit={handleSubmit} className={styles.FormControl}>
            <div className={styles.boxText}>
              <div className={styles.name}>
                Tên <span className={styles.required}>*</span>
              </div>
              <TextValidator
                fullWidth
                type="text"
                label="Tên"
                variant="filled"
                name="username"
                autoComplete="off"
                size="small"
                value={name}
                onChange={handleChangeName}
                className={styles.textField}
              />
            </div>
            <div className={styles.boxText}>
              <div className={styles.name}>
                Email <span className={styles.required}>*</span>
              </div>
              <TextValidator
                fullWidth
                type="text"
                label="Email"
                variant="filled"
                name="username"
                autoComplete="off"
                size="small"
                value={email}
                onChange={handleChangeEmail}
                className={styles.textField}
              />
            </div>
            <div className={styles.boxText}>
              <div className={styles.name}>
                Địa chỉ <span className={styles.required}>*</span>
              </div>
              <TextValidator
                fullWidth
                type="text"
                label="Địa chỉ"
                variant="filled"
                name="username"
                autoComplete="off"
                size="small"
                value={address}
                onChange={handleChangeAdress}
                className={styles.textField}
              />
            </div>
            <div className={styles.boxText}>
              <div className={styles.name}>
                Số điện thoại <span className={styles.required}>*</span>
              </div>
              <TextValidator
                fullWidth
                type="text"
                label="Số điện thoại"
                variant="filled"
                name="username"
                autoComplete="off"
                size="small"
                value={phone}
                onChange={handleChangePhone}
                className={styles.textField}
              />
            </div>
            <div className={styles.box}>
              <button className={styles.button} onClick={closeModal}>
                Hủy
              </button>
              <button className={styles.button}>Xác nhận</button>
            </div>
          </ValidatorForm>
        </div>
      </div>
    </Grow>
  );
};

export default UpdateProfle;
