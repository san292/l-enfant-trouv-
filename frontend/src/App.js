import { BrowserRouter } from 'react-router-dom';
import { Header } from './components';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
