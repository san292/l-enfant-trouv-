import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';

const GoogleAuthLogin = () => {
	const [user, setUser] = useState();
	console.log(user);
	const handleFetch = async (tokenId) => {
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
	};

	return (
		<>
			{user ? (
				<h1>{user.name}</h1>
			) : (
				<GoogleLogin
					onSuccess={(credentialResponse) => {
						console.log(credentialResponse);

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
