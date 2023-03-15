import { Container } from "./styles";

import loader from "../../assets/img/loader.gif";

interface LoaderProps {
  text: string;
  alt: string;
}

function Loader({ text, alt }: LoaderProps) {
  return (
    <Container>
      <p data-text={text === "Carregando" ? text : ""}>{text}</p>
      <img src={loader} alt={alt} />
    </Container>
  );
}

export default Loader;
