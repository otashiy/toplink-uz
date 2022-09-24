import "./sign-up.scss";

import { Link, useNavigate } from "react-router-dom";
import Container from "../container/container";
import { useContext, useRef, useState } from "react";
import { SignContext } from "../../contexts/sign-provider";

const SignUp = () => {

const emailRef = useRef();
const passwordRef = useRef();

const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

const navigate = useNavigate();


const { setToken } = useContext(SignContext);

const handleFormSubmit = (evt) => {
evt.preventDefault();

const emailValue = emailRef.current.value;
const passwordValue = passwordRef.current.value;

if(emailValue && passwordValue) {
setLoading(true);
fetch("", {
body: {
    "email": emailValue,
    "password": passwordValue
  },
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(res => {
if(res.ok) {
return res.json()
}
})
.then(data => {
setToken(data.token);
navigate("/sign");
})
.catch(e => setError(e.messsage))
.finally(() => setLoading(false))
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
           <button disabled={loading} type="submit">Ro'yxatdan o'tish</button>
        </form>
        <div className="content">
        <p>Accountingiz mavjudmi?</p>
        <Link to={"/access"}>Kirish</Link>
        </div>
        </Container>
        </>
    )
}

export default SignUp;