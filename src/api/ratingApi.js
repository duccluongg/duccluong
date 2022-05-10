import axiosClient from './axiosClient';
import URL from '../constants/api';
import storageUser from '../constants/storageUser';

function getListComment(data) {
  return axiosClient.get(URL.ratingUrl + `/${data}`);
}

function postComment(data) {
  return axiosClient.post(URL.userRatingUrl, data, {
    headers: {
      Authorization: `${sessionStorage.getItem(storageUser.TOKEN)}`,
    },
  });
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { getListComment, postComment };
