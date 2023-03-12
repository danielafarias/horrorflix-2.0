import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { RoutesApp } from "./routes";

import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} theme={"dark"} />
      <RoutesApp />
      <GlobalStyles />
    </>
  );
}

export default App;
