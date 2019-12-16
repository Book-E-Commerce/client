import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://35.247.182.159',
  // timeout: 10000
});

export default instance