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

const getCourse = async (id) => {
  try {
    const response = await instance.get(`/course/${id}`);
    return response.data;
  } catch (error) {
    console.log('Error at /course/id: ', error);
    return null;
  }
};

export default { getCourses, getCourse };
