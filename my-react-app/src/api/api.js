import axios from 'axios';

export const requestAPI = {
  delFriend(id, userId) {
    return axios
      .delete(`/user/id${id}/${userId}`)
      .then((response) => response.data);
  },
  addFriend(id, userId) {
    return axios
      .post(`/user/id${id}/${userId}`)
      .then((response) => response.data);
  },
  getFriends(id, currentPage) {
    return axios
      .get(`/friends/id${id}/${currentPage}`)
      .then((response) => response.data);
  },
  getTargetFriend(friendId) {
    return axios.get(`/friend/${friendId}`).then((response) => response.data);
  },
  login(credentials) {
    return axios
      .post('/login', {
        body: JSON.stringify(credentials),
      })
      .then((response) => response.data);
  },
  getDialogPersons(id) {
    return axios.get(`/dialogs/${id}`).then((response) => response.data);
  },
  getPhotos(id, currentPage = 1) {
    return axios
      .get(`/photos/id${id}/${currentPage}`)
      .then((response) => response.data);
  },
  getTargetPhoto(photoId) {
    return axios.get(`/photo/${photoId}`).then((response) => response.data);
  },
  getUsers(id, currentPage) {
    return axios
      .get(`/users/${id}/${currentPage}`)
      .then((response) => response.data);
  },
  getTargetUser(userId) {
    return axios.get(`/user/${userId}`).then((response) => response.data);
  },
};
