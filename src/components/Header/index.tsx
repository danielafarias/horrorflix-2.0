import { Container } from "./styles";
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Container>
            <Link className="logo" to="/">Horrorflix</Link>
            <Link className="list" to="/lista">Minha lista</Link>
        </Container>
    );
}

export default Header;