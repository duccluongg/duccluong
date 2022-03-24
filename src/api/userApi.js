import axiosClient from './axiosClient';
import URL from '../constants/api';
import storageUser from '../constants/storageUser';

function userLogin(data) {
  return axiosClient.post(URL.loginUrl, data);
}

function userRegister(data) {
  return axiosClient.post(URL.registerUrl, data);
}

function userInfor() {
  return axiosClient.get(URL.userUrl, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(storageUser.TOKEN)}`,
    },
  });
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { userLogin, userRegister, userInfor };
