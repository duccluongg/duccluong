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

// eslint-disable-next-line import/no-anonymous-default-export
export default { getListCart };
