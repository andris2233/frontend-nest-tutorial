import axios from 'axios';

const url = `${process.env.VUE_APP_API}/users`;

export default {
  getAll: () => axios
    .get(url).then((response) => response.data),

  create: (payload) => axios
    .post(url, payload).then((response) => response.data),
};
