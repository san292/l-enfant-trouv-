import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { useSelector } from 'react-redux';
import HeaderTest from '../../components/Header/HeaderTest';

const Home = () => {
	const { user } = useSelector((state) => state.user);
	console.log('hola');
	return (
		<>
			<HeaderTest />
			<Main />
		</>
	);
};
export default Home;
