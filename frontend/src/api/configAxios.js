import axios from 'axios';



export default axios.create({
	baseURL: `/api/v1/auth`,
	axiosConfig,

	timeout: 2000,
});
