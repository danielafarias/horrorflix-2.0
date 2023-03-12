import './App.css';
import { RoutesApp } from './routes';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} theme={'dark'} />
      <RoutesApp />
      <GlobalStyles />
    </>
  );
}

export default App;
