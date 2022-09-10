// // import { useEffect, useState, useRef } from 'react';
// // import axios from 'axios';
// // import { PayPalButton } from 'react-paypal-button-v2';

// // const Paypal = () => {
// // 	const [sdkReady, setSdkReady] = useState(false);

// // 	const paypal = useRef();

// // 	useEffect(() => {

// // window.paypal.Buttons({

// // }).render(paypal.current)

// // 		const addPaypalScript = async () => {
// // 			const { data: clientId } = await axios.get('/api/config/paypal');
// // 			const script = document.createElement('script');
// // 			script.type = 'text/javascript';
// // 			script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&components=Buttons`;
// // 			script.async = true;
// // 			script.onload = () => {
// // 				setSdkReady(true);
// // 			};
// // 			document.body.appendChild(script);
// // 		};
// // 	}, []);

// 	// useEffect(() => {

// 	// 	const addPaypalScript = async () => {

// 	// 		const { data: clientId } = await axios.get('/api/config/paypal');
// 	// 		const script = document.createElement('script');
// 	// 		script.type = 'text/javascript';
// 	// 		script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&components=Buttons`;
// 	// 		script.async = true;
// 	// 		script.onload = () => {
// 	// 			setSdkReady(true);
// 	// 		};
// 	// 		document.body.appendChild(script);
// 	// 		};

// 	// 	addPaypalScript();
// 	// }, []);

// 	return (
// 		<div>
// 			<div ref={paypal}></div>
// 		</div>

// 		// <PayPalButton
// 		// 	amount='0.01'
// 		// 	onSuccess={(details, data) => {
// 		// 		console.log(data);
// 		// 		alert('Transaction completed by ' + details.payer.name.given_name);
// 		// 	}}>
// 		// 	try to add paypal payment
// 		// </PayPalButton>
// 	);
// };
// export default Paypal;
