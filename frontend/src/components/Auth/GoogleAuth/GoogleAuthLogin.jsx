import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleAuthLogin = () => {
	const [user, setUser] = useState();
	const navigate = useNavigate();
	console.log(user?.name);
	const handleFetch = async (tokenId) => {
		try {
			const res = await fetch('/api/v1/auth/google', {
				method: 'POST',
				body: JSON.stringify({
					tokenId,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await res.json();
			setUser(data);

			setTimeout(() => {
				navigate('/');
			}, 2000);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{user ? (
				<h1>{user?.name}</h1>
			) : (
				<GoogleLogin
					onSuccess={(credentialResponse) => {
						handleFetch(credentialResponse.credential);
					}}
					text='continue_with'
					onError={() => {
						console.log('Login Failed');
					}}
				/>
			)}
		</>
	);
};

export default GoogleAuthLogin;
