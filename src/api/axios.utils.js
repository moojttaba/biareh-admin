import axios from 'axios';

export const responseData = axios
  .get('/api/v1/products')
  .then((response) => response.data);
