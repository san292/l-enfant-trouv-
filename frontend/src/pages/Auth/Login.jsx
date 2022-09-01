import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const initialState = {
	email: '',
	password: '',
};

const Login = () => {
	const [values, setValues] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const { email, password } = values;
	const loginUser = { email, password };

	const handleChange = (e) => {
		const { name, value } = e.target;

		setValues({ ...values, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const { data } = await axios.post('/api/v1/auth/login', loginUser);

			console.log(data);
		} catch (error) {
			setError(error.message);
		}
	};
	if (loading) {
		return <h1>...Loading</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<h3>Test Login </h3>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						onChange={handleChange}
						value={email}
						name='email'
						type='email'
						id='email'
					/>
				</div>
				<div>
					<label htmlFor='password'>Name</label>
					<input
						onChange={handleChange}
						value={password}
						name='password'
						type='password'
						id='password'
					/>
				</div>

				<button type='submit'>Submit</button>
			</form>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: grid;
	place-items: center;
	min-height: 100vh;
	background-color: #222;
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f2e9e9;
		padding: 2rem;
	}
	form div {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
	}
	input {
		padding: 0.25rem 0.35rem;
	}
	button {
		margin-top: 10px;
		border: none;
		background-color: black;
		color: white;
		padding: 0.35rem 0.25rem;
	}
`;

export default Login;
