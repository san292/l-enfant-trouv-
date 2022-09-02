import { useSelector } from 'react-redux';

const Home = () => {
	const { user } = useSelector((state) => state.user);
	console.log(user);
	return <div>Hello {user.name}</div>;
};
export default Home;
