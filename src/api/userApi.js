import axiosClient from './axiosClient';
import URL from '../constants/api';

function userLogin(data) {
  return axiosClient.post(URL.loginUrl, data);
}
function userRegister(data) {
  return axiosClient.post(URL.registerUrl, data);
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { userLogin, userRegister };
