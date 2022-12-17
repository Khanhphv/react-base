import axios from 'axios';

const client = axios.create({
  baseURL: 'http://vally.cc',
  timeout: 1000,
});

export default client;
