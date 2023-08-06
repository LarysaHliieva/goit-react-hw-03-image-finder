import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '19043103-0cd62514f089da7e89200caeb',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 4,
  },
});

export const searchImages = async search => {
  const response = await instance.get('/', {
    params: {
      q: search,
      page: 1,
    },
  });

  return response.data;
};
