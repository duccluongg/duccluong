import axiosClient from './axiosClient';
import URL from '../constants/api';
import storageUser from '../constants/storageUser';

function getListCart() {
  return axiosClient.get(URL.cartUrl, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(storageUser.TOKEN)}`,
    },
  });
}

function delListCart(data) {
  return axiosClient.delete(URL.cartUrl, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(storageUser.TOKEN)}`,
    },
    data,
  });
}

function addToCart(data) {
  return axiosClient.put(URL.cartUrl + '/add', data, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(storageUser.TOKEN)}`,
    },
  });
}

function IncrToCart(data) {
  return axiosClient.put(URL.cartUrl + '/add', data, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(storageUser.TOKEN)}`,
    },
  });
}

function removeToCart(data) {
  return axiosClient.put(URL.cartUrl + '/remove', data, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(storageUser.TOKEN)}`,
    },
  });
}

function deleteFromCart(data) {
  return axiosClient.delete(`${URL.cartUrl}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(storageUser.TOKEN)}`,
    },
    data,
  });
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getListCart,
  IncrToCart,
  removeToCart,
  deleteFromCart,
  addToCart,
  delListCart,
};
