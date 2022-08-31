import axios from 'axios';

const register = async (userData) => {
  const response = await axios.post(
    'http://localhost:8000/api/v1/auth/register',
    // {
    //   headers: {
    //     'Content-Type': 'application/json;charset=UTF-8',
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // },
    userData
  );
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  console.log('response.data-------------->', response.data);
  return response.data;
};

const authService = {
  register
};
export default authService;
