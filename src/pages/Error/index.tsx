import { Container } from "./styles";
import NotFoundImage from "../../assets/img/notFoundImage.svg";
import { Link } from "react-router-dom";
function Error() {
    return (
        <Container>
            <img src={NotFoundImage} alt="Not Found"/>
            <div>
                <p>Ops... Festa errada!</p>
                <Link to="/" className="error-btn">Me tira daqui</Link>
            </div>
        </Container>
    )
}

export default Error;