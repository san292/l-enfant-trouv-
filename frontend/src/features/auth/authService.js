import axios from 'axios';

const register = async (userData) => {
  const response = await axios.post(
    'http://localhost:8000/api/v1/auth/register',
    userData
  );
  console.log('response.---register----------->', response);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};
const login = async (userData) => {
  const response = await axios.post(
    'http://localhost:8000/api/v1/auth/login',

    userData
  );
  console.log('response.data-------------->', response);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  console.log('response.data--login------------>', response);
  return response.data;
};

const authService = {
  register,
  login
};
export default authService;
