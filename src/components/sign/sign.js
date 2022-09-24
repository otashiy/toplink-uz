import "./sign.scss"; 

import Container from "../container/container";

const Sign = () => {
    return (
        <>
       <Container className="sign__container">

       <h1 className="sign__title">Ro'yxatdan o'tish</h1>
        <p className="sign__desc">O'zingiz haqida to'liq ma'lumot kiriting</p>
        <form className="sign__form" action="#">
            <label htmlFor="text">
                To'liq ism
                <input type="text" name="text" id="name" required />
            </label>
            <label htmlFor="phone">
                Telefon nomer
                <input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
            </label>
            <button type="submit">Qabul qilish</button>
        </form>
       
       </Container>
        </>
    )
};

export default Sign;