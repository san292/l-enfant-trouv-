import { BrowserRouter } from 'react-router-dom';
import { Header } from './components';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeaderTest from './components/Header/HeaderTest';

function App() {
	return (
		<>
			<HeaderTest />
			<BrowserRouter>
				<Routes />
				<ToastContainer />
			</BrowserRouter>
		</>
	);
}

export default App;
