import axiosClient from './axiosClient';
import URL from '../constants/api';

function getAllProduct() {
  return axiosClient.get(URL.productUrl);
}
function getProductAPi(data) {
  return axiosClient.get(URL.productUrl + `=${data}`);
}
function getProductDetail(data) {
  return axiosClient.get(URL.productDetailUrl + `/${data}`);
}

function getProductRelated(data) {
  return axiosClient.get(URL.productUrl + `=${data}`);
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProductAPi,
  getAllProduct,
  getProductDetail,
  getProductRelated,
};
