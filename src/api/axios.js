import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://34.87.78.238',
  timeout: 10000
});

export default instance