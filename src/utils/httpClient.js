import Axios from 'axios';

export const instance = Axios.create({
  baseURL: 'https://ubademy-la-venganza-back.herokuapp.com/',
  withCredentials: true,
});

// Those interceptors log the https requests and responses made with axios.
instance.interceptors.request.use((request) => {
  console.log('Starting Request', JSON.stringify(request, null, 2));
  return request;
});

instance.interceptors.response.use((response) => {
  console.log('Response:', JSON.stringify(response, null, 2));
  return response;
});

export const configureAxiosHeaders = (token) => {
  instance.defaults.headers['X-Auth-Token'] = token;
  instance.defaults.headers.Cookie = `firebaseAuth=${token}`;
};
