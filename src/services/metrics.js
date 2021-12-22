import { instance } from '../utils/httpClient';

const getMetrics = async () => {
  try {
    const response = await instance.get('/metrics/users');
    return response.data;
  } catch (error) {
    console.log('There was an error while fetching courses!', error);
    return null;
  }
};

export default { getMetrics };
