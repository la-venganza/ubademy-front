import { instance } from '../utils/httpClient';

const getCourses = async () => {
  try {
    const response = await instance.get('/course?page_size=999');
    return response.data;
  } catch (error) {
    console.log('There was an error while fetching courses!', error);
    return null;
  }
};

export default { getCourses };
