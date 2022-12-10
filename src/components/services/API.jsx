import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchImagesByName = async (value, page) => {
  const searchParams = new URLSearchParams({
    key: '30455130-0aca0478341a7e36a6d0ca3c2',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    q: `${value}`,
    page: `${page}`,
  });
  const response = await axios.get(`/api/?${searchParams}`);

  const { totalHits, hits } = response.data;

  const filtredResponse = {
    totalPages: Math.ceil(totalHits / 12),
    hits: hits.map(({ id, largeImageURL, webformatURL, tags }) => ({
      id,
      largeImageURL,
      webformatURL,
      tags,
    })),
  };
  return filtredResponse;
};
