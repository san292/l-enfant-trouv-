import { Routes, Route } from 'react-router-dom';
import {
	Home,
	Programme,
	Observatoire,
	NousSoutenir,
	Mission,
	Apropos,
	SeConnecter,
	Creercompte,
} from '../pages';
import VerifyPage from '../pages/Auth/VerifyPage';
import Login from '../pages/Auth/Login';

const RouteIndex = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='mission' element={<Mission />} />
			<Route path='programme' element={<Programme />} />
			<Route path='observatoire' element={<Observatoire />} />
			<Route path='noussoutenir' element={<NousSoutenir />} />
			<Route path='apropos' element={<Apropos />} />
			<Route path='seconnecter' element={<SeConnecter />} />
			<Route path='creercompte' element={<Creercompte />} />
			<Route path='verify-email' element={<VerifyPage />} />
			<Route path='login' element={<Login />} />
		</Routes>
	);
};
export default RouteIndex;
