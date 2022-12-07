import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchImagesByName = async value => {
  const searchParams = new URLSearchParams({
    key: '30455130-0aca0478341a7e36a6d0ca3c2',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    q: `${value}`,
  });
  const response = await axios.get(`/api/?${searchParams}`);
  return response;
};
