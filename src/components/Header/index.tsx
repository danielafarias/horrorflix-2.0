import { Container } from "./styles";
import { Link } from 'react-router-dom'
import { GiHeartOrgan } from 'react-icons/gi'

function Header() {
    return (
        <Container>
            <Link className="logo" to="/">Horrorflix</Link>
            <Link className="list" to="/lista"><GiHeartOrgan size={35} data-testid="favorite-icon"/></Link>
        </Container>
    );
}

export default Header;