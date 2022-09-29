import "./sign-up.scss";

import { Link, useNavigate } from "react-router-dom";
import Container from "../container/container";
import { useRef, useState } from "react";
// import { SignContext } from "../../contexts/sign-provider";

const SignUp = () => {

const emailRef = useRef();
const passwordRef = useRef();
const userNameRef = useRef();
const nameRef = useRef();
const telRef = useRef();


const [error, setError] = useState("");

const navigate = useNavigate();


// const { setToken } = useContext(SignContext);

const handleFormSubmit = (evt) => {
evt.preventDefault();


const emailValue = emailRef.current.value;
const passwordValue = passwordRef.current.value;
const userNameValue = userNameRef.current.value;
const nameValue = nameRef.current.value;
const telValue = telRef.current.value;


if(emailValue && passwordValue && userNameValue && nameValue && telValue) {
  fetch("http://207.154.246.125:8888/register", {
    
    body: JSON.stringify({
      "username": userNameValue,
      "email": emailValue,
      "password": passwordValue,
      "fullname": nameValue,
      "phone": telValue
  }),
    headers: {
    'Content-Type': 'application/json'
},
method: "POST"


})
.then(res => res.json())
.then(data => {
  
  console.log(data);
  navigate("/access");
})
.catch(e => setError(e.messsage))
}
}

    return (
        <>

         <Container>
        
            <h1 className="title">Ro'yxatdan o'tish</h1>
            <p className="text">Barcha xarajatlar va daromadingizni bir joyda kuzatib borish uchun hozir ro'yxatdan o'ting</p>
        
            <form className="sign-form" onSubmit={handleFormSubmit} action="#">

              <label htmlFor="email" className="email">
                Elektron pochta <br />
                  <input className="sign__input" name="email" type="email" ref={emailRef} placeholder="Email" />
                    <span>{error}</span>
              </label>

            <label htmlFor="password">
              Parol <br />
                <input className="sign__input sign__input--password" name="password" type="password" ref={passwordRef} required placeholder="password" />
                  <span>{error}</span>
              </label>

           <label htmlFor="text">
             Foydalanuvchi nomi
                <input className="sign__input sign__input--person" name="username" type="text" ref={userNameRef} placeholder="username" />
              </label>

              <label htmlFor="text">
                To'liq ism
                <input type="text" placeholder="Type your name" className="sign__input" name="fullname" ref={nameRef} id="name" required />
                <span>{error}</span>
            </label>

            <label htmlFor="phone">
                Telefon nomer
                <input type="tel" placeholder="Type your phone" className="sign__input" name="phone" id="phone" ref={telRef} required />
                <span>{error}</span>
            </label>

           <button className="sign__btn" type="submit">Ro'yxatdan o'tish</button>

            </form>

        <div className="content">
        <p className="content__desc">Accountingiz mavjudmi?</p>
        <Link className="content__link" to={"/access"}>Kirish</Link>
        </div>

        <p>{error}</p>

        </Container>

        </>
    )
}

export default SignUp;