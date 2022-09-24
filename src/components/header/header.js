import "./header.scss";

import { Link } from "react-router-dom"
import Container from "../container/container";

const Header = () => {
    return (
        <>
       <Container>
       <div className="header-inner">
        <Link to={"/"}>Toplink</Link>
        <nav>
            <ul className="header__list">
                <li>
                    <a href="/">U qanday ishlaydi</a>
                </li>
                <li>
                    <a href="/">Xususiyat</a>
                </li>
            </ul>
        </nav>
        <div className="header__btn">
            <button type="button">
                Kirish
            </button>
            <button type="button">
                Ro'yxatdan o'tish
            </button>
        </div>
        </div>
       </Container>
        </>
    )
}

export default Header;

