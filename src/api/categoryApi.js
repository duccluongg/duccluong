import axiosClient from './axiosClient';
import URL from '../constants/api';

function getEachCategories(data) {
  return axiosClient.get(URL.categoryUrl + `/${data}`);
}
function getCategories() {
  return axiosClient.get(URL.categoryUrl);
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { getCategories, getEachCategories };
