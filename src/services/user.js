import { instance, configureAxiosHeaders } from '../utils/httpClient';

const getUser = async (email, loginType = '') => {
  try {
    console.log('Trying to fetch user form back');
    let path = `/user/admin/${email}?properties=all`;
    if (loginType !== '') path = `${path}&loginType=${loginType}`;
    const response = await instance.get(path);
    return response.data;
  } catch (error) {
    console.log('Exception rised when trying to fetch user from back.');
    console.log(error.response);
    console.log('Returning null');
    return null;
  }
};

const getUserFull = async (email) => {
  try {
    console.log('Trying to fetch user from back');
    const response = await instance.get(`/user/login/${email}?properties=all`);
    return response.data;
  } catch (error) {
    console.log('Exception rised when trying to fetch user from back.');
    console.log(error.response);
    console.log('Returning null');
    return null;
  }
};

const getUsers = async () => {
  try {
    const response = await instance.get('/user/all?page_size=999');
    return response.data;
  } catch (error) {
    console.log('There was an error while fetching users!', error);
    return null;
  }
};

const setCookie = async (token) => {
  configureAxiosHeaders(token);
};

export default {
  getUser, setCookie, getUsers, getUserFull,
};
