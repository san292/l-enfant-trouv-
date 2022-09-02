import axios from 'axios';

<<<<<<< HEAD
const axiosConfig = {
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
	},
};
=======

>>>>>>> d5dec0e7e1fa848c3ff0022a750beb33e76ab2f9

export default axios.create({
	baseURL: `/api/v1/auth`,
	axiosConfig,
<<<<<<< HEAD
=======

	timeout: 2000,
>>>>>>> d5dec0e7e1fa848c3ff0022a750beb33e76ab2f9
});
