import "./header.scss";

import { Link } from "react-router-dom"
import Container from "../container/container";

const Header = () => {
    return (
        <>
       <Container>
       <div className="header-inner">
        <Link to={"/"}>
            <img src="https://toplink.ee/wp-content/uploads/toplink.svg" alt="site-logo" width={93} height={43} />
        </Link>
        <nav>
            <ul className="header__list">
                <li>
                    <a className="header__link" href="/">U qanday ishlaydi</a>
                </li>
                <li>
                    <a className="header__link" href="/">Xususiyat</a>
                </li>
            </ul>
        </nav>
        <div className="header__btn-content">
            <button className="header__btn" type="button">
                Kirish
            </button>
            <button className="header__btn" type="button">
                Ro'yxatdan o'tish
            </button>
        </div>
        </div>
       </Container>
        </>
    )
}

export default Header;

