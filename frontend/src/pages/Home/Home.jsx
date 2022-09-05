import { useSelector } from 'react-redux';

const Home = () => {
  const { user } = useSelector((state) => state.user);
  console.log('hola', user);
  return <div>Hello {user.name}</div>;
};
export default Home;
