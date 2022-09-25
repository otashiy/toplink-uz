import "./sign-up.scss";

import { Link, useNavigate } from "react-router-dom";
import Container from "../container/container";
import { useContext, useRef, useState } from "react";
import { SignContext } from "../../contexts/sign-provider";

const SignUp = () => {

const emailRef = useRef();
const passwordRef = useRef();


const [error, setError] = useState("");

const navigate = useNavigate();


const { setToken } = useContext(SignContext);

const handleFormSubmit = (evt) => {
evt.preventDefault();


const emailValue = emailRef.current.value;
const passwordValue = passwordRef.current.value;


if(emailValue && passwordValue) {
  fetch("http://207.154.246.125:8888/register", {
    
    body: JSON.stringify({
      "email": emailValue,
      "password": passwordValue
  }),
    headers: {
    'Content-Type': 'application/json'
},
method: "POST"


})
.then(res => {
  if(res.ok) {
    return res.json()
}
})
.then(data => {
  setToken(data);
  navigate("/sign");
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

              <label htmlFor="email">
                Elektron pochta
                  <input type="email" ref={emailRef} placeholder="Ex abc@example.com" />
                    <span>{error}</span>
              </label>

            <label htmlFor="password">
              Parol
                <input type="password" ref={passwordRef} required placeholder="password" />
                  <span>{error}</span>
              </label>

           <label htmlFor="text">
             Foydalanuvchi nomi
                <input type="text" placeholder="Ex  Saul Ramirez" />
              </label>
           <button type="submit">Ro'yxatdan o'tish</button>

            </form>

        <div className="content">
        <p>Accountingiz mavjudmi?</p>
        <Link to={"/main-sign"}>Kirish</Link>
        </div>

        <p>{error}</p>

        </Container>

        </>
    )
}

export default SignUp;