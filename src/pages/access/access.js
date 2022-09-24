import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignContext } from "../../contexts/sign-provider";

const Access = () => {

const emailRef = useRef();
const passwordRef = useRef();

const navigate = useNavigate();

const {setToken} = useContext(SignContext);

const [error, setError] = useState();

const handleFormSubmit = (evt) => {
evt.preventDefault();

const emailValue = emailRef.current.value;
const passwordValue = passwordRef.current.value;

if(emailValue && passwordValue) {
    fetch(`http://207.154.246.125:8888/login`, {

        method: "POST",

        body: JSON.stringify({
            "email": emailValue,
            "password": passwordValue
        }),
          headers: {
          'Content-Type': 'application/json'
        }
})
.then(res => res.json())
.then(data => {
setToken(data.token)
navigate("/login")
})
.catch(e => setError(e.message))
}
}


    return (
        <>
        <h1>Kirish</h1>
        <p>Barcha xarajatlar va daromadingizni bir joyda kuzatib borish uchun hozir ro'yxatdan o'ting</p>
        <form onSubmit={handleFormSubmit} action="#">
            <label htmlFor="email">
            Elektron pochta
            <input type="email" ref={emailRef} required placeholder="ex abc@gmail.com" />
            <span>{error}</span>
            </label>
            <label htmlFor="password">
            Elektron pochta
            <input type="password" ref={passwordRef} required placeholder="password" />
            <span>{error}</span>
            </label>
            <button type="submit">Kirish</button>
            <p>Accountingiz mavjud emasmi?</p>
            <Link to={"/"}>
            Ro'yxatdan o'tish
            </Link>
        </form>
        </>
    )
}

export default Access;