import { useSelector } from 'react-redux';

const Home = () => {
	const { user } = useSelector((state) => state.user);
	console.log('hola');
	return <div>Hola {user.name}</div>;
};
export default Home;
