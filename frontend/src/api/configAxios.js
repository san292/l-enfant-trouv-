import axios from 'axios';
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
};

export default axios.create({
  baseURL: `http://localhost:8000/api/v1/auth`,
  axiosConfig,

  timeout: 2000
});
