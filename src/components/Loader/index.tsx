import { Container } from "./styles";
import loader from "../../assets/img/loader.gif";

function Loader() {
  return (
    <Container>
      <p data-text="Carregando">Carregando</p>
      <img src={loader} alt="Loading" />
    </Container>
  );
}

export default Loader;
