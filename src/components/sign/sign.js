import "./sign.scss"; 

import Container from "../container/container";
import { useContext, useRef, useState } from "react";
import { SignContext } from "../../contexts/sign-provider";
import { useNavigate } from "react-router-dom";

const Sign = () => {

const nameRef = useRef();
const telRef = useRef();

const { setToken } = useContext(SignContext);

const [error, setError] = useState("");

const navigate = useNavigate();
 
const handleFormSubmit = (evt) => {
evt.preventDefault();

const nameValue = nameRef.current.value;
const telValue = telRef.current.value;


if(nameValue && telRef) {
    fetch("http://207.154.246.125:8888/register", {
body: JSON.stringify({
    "name": nameValue,
    "tel": telValue
}),
  headers: {
  'Content-Type': 'application/json'
},
method: "POST"

})
.then(res => {
if(res.ok) {
res.json()
}
})
.then(data => {
console.log(data);
navigate("/access")
})
.catch(e => setError(e.message))
}
}


    return (
        <>
       <Container className="sign__container">

       <h1 className="sign__title">Ro'yxatdan o'tish</h1>
        <p className="sign__desc">O'zingiz haqida to'liq ma'lumot kiriting</p>
        <form onSubmit={handleFormSubmit} className="sign__form" action="#">
            <label htmlFor="text">
                To'liq ism
                <input type="text" name="text" ref={nameRef} id="name" required />
                <span>{error}</span>
            </label>
            <label htmlFor="phone">
                Telefon nomer
                <input type="tel" name="phone" id="phone" ref={telRef} required />
                <span>{error}</span>
            </label>
            <button type="submit">Qabul qilish</button>
        </form>
       
       </Container>
        </>
    )
};

export default Sign;