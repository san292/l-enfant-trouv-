import { BrowserRouter } from 'react-router-dom';
import { Header } from './components';
import GoogleAuthLogin from './components/GoogleAuth/GoogleAuthLogin';
import Routes from './routes';

function App() {
	return (
		<>
			<BrowserRouter>
				<GoogleAuthLogin />
				<Routes />
			</BrowserRouter>
		</>
	);
}

export default App;
