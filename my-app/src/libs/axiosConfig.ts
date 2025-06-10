import axios from 'axios';

const api = axios.create({
  baseURL: 'https://site--fronted-redibo--pnmmfvfj8jpw.code.run/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;