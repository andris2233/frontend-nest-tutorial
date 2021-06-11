import axios from 'axios';

const AUTH_ENDPOINT = `${process.env.VUE_APP_API}/auth`;

const url = {
  LOGIN: `${AUTH_ENDPOINT}/login`,
  REGISTRATION: `${AUTH_ENDPOINT}/registration`,
};

export default {
  login: (user) => axios
    .post(url.LOGIN, user)
    .then((response) => response.data),

  registration: (user) => axios
    .post(url.REGISTRATION, user)
    .then((response) => response.data),
};
