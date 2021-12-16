import { instance, configureAxiosHeaders } from '../utils/httpClient';

const getUser = async (email) => {
  try {
    console.log('Trying to fetch user form back');
    const response = await instance.get(`/user/login/${email}?properties=all`);
    return response.data;
  } catch (error) {
    console.log('Exception rised when trying to fetch user from back.');
    console.log(error.response.data);
    console.log('Returning null');
    return null;
  }
};

const setCookie = async (token) => {
  configureAxiosHeaders(token);
};

export default { getUser, setCookie };
