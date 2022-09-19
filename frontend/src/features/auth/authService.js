import customFecth from '../../utils/axios';

const register = async (userData) => {
  const response = await customFecth.post('auth/register', userData);
  if (response.data) {
    return response.data;
  }
};

const login = async (userData) => {
  const response = await customFecth.post('auth/login', userData);
  if (response.data) {
  }
  return response.data;
};
const verifyEmail = async (userData) => {
  const response = await customFecth.post('auth/verif', userData);
  if (response.data) {
  }
  return response.data;
};

const authService = {
  register,
  login,
  verifyEmail
};
export default authService;
