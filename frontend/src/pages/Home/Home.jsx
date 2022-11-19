import { useSelector } from 'react-redux';

const Home = () => {
  const name = useSelector((state) => state.auth.userName);
  const user = useSelector((state) => state.auth.user);

  console.log('hello name', name);
  console.log('hello user', user);
  // const userName = localStorage.getItem('userName');
  // const { user } = useSelector((state) => state.user);
  return <h1> {name ? `Bienvenue ${name}` : 'Hello'}</h1>;
};

export default Home;
