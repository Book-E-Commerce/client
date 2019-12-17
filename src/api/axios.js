import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://hackbookserver.dipaproject.online/',
  // timeout: 10000
});

export default instance