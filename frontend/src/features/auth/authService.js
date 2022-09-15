import customFecth from '../../utils/axios';

const register = async (userData) => {
  console.log('userdata register', userData);

  const response = await customFecth.post('auth/register', userData);
  if (response.data) {
    return response.data;
  }
  console.log('response.data- regsister------------->', response.data);
};

const login = async (userData) => {
  console.log('userdata login', userData);

  const response = await customFecth.post('auth/login', userData);
  if (response.data) {
    return response.data;
  }
  console.log('response  authservice 23', response);
};

const authService = {
  register,
  login
};
export default authService;
