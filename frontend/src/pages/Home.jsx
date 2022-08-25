import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import jwt_decode from 'jwt-decode';

const Home = () => {
	const handleFetch = async (token) => {
		const res = await fetch('/api/v1/auth/google', {
			method: 'POST',
			body: JSON.stringify({
				token,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await res.json();
		console.log(data);
	};

	return (
		<GoogleLogin
			onSuccess={(credentialResponse) => {
				console.log(credentialResponse);
				var decode = jwtDecode(credentialResponse.credential);
				handleFetch(credentialResponse.credential);
			}}
			text='continue_with'
			onError={() => {
				console.log('Login Failed');
			}}
		/>
	);
	// const login = useGoogleLogin({
	// 	onSuccess: (tokenResponse) => {
	// 		console.log(tokenResponse);
	// 		var decoded = jwtDecode(tokenResponse.code);
	// 		console.log(decoded);
	// 	},
	// 	flow: 'auth-code',
	// 	scope: 'openid',
	// });
	// return <button onClick={() => login()}>Sign in with Google 🚀 </button>;
};

export default Home;

// <GoogleLogin
// 	onSuccess={(credentialResponse) => {
// 		console.log(credentialResponse);
// 	}}
// 	text='continue_with'
// 	onError={() => {
// 		console.log('Login Failed');
// 	}}
// />
