import {
  ref, getStorage, getDownloadURL,
} from 'firebase/storage';

const downloadUrl = async (filename) => {
  const storage = getStorage();
  const url = await getDownloadURL(ref(storage, filename));
  return url;
};

export default { downloadUrl };
