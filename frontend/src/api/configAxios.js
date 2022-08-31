import axios from 'axios';

const axiosConfig = {
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
	},
};

export default axios.create({
	baseURL: `/api/v1/auth`,
	axiosConfig,
});
