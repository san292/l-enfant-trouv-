import { GoogleLogin } from '@react-oauth/google';

const GoogleAuthLogin = () => {
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
		console.log(data);
	};

	return (
		<>
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
		</>
	);
};

export default GoogleAuthLogin;
