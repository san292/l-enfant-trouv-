import { useSelector } from 'react-redux';

const Home = () => {
  const name = useSelector((state) => state.auth.userName);

  return <h1> {name ? `Bienvenue ${name}` : 'Hello'}</h1>;
};

export default Home;
