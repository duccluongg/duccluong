import axiosClient from './axiosClient';
import URL from '../constants/api';
import storageUser from '../constants/storageUser';

function createOrder(data) {
  return axiosClient.post(URL.orderUrl, data, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(storageUser.TOKEN)}`,
    },
  });
}

function getListOrder() {
  return axiosClient.get(URL.orderUrl, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(storageUser.TOKEN)}`,
    },
  });
}
function getDetailOrder(data) {
  return axiosClient.get(URL.orderUrl + `/${data}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(storageUser.TOKEN)}`,
    },
  });
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createOrder,
  getListOrder,
  getDetailOrder,
};
