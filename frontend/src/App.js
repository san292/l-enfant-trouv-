import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Header } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import GlobalStyles from './UI/styles/Global';
import { ThemeProvider } from 'styled-components';
import { Theme } from './UI/styles/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <BrowserRouter>
          {/* <GlobalStyles /> */}
          <Header />
          <Routes />
          <ToastContainer />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
