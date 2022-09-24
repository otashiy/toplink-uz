import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const CheckEmail = () => {


const emailRef = useRef();

const [error, setError] = useState("");

const navigate = useNavigate();

const handleFormSubmit = (evt) => {
evt.preventDefault();

const emailValue = emailRef.current.value;

if(emailValue) {
   
    fetch("http://207.154.246.125:8888/checkemail", {
        method: "POST",
        body: JSON.stringify({
            "email": emailValue
        }),
        headers: {
            'Content-Type': 'application/json'
        }
})
.then(res => res.json())
.then(data => {
console.log(data);
navigate("/verification")
})
.catch(e => setError(e.message))
}
}

    return(
        <>
        <h1>Parolni unutdingizmi?</h1>
        <p>Agar parolni unutgan bo'lsangiz,parolni tiklang!</p>
        <form onSubmit={handleFormSubmit} action="#">
            <label htmlFor="email">
                Elektron pochta
                <input type="email" ref={emailRef} required name="email" placeholder="@ Ex abc@gmail.com" />
                <span>{error}</span>
            </label>

            <button type="submit">Qabul qilish</button>
        </form>
        </>
    )
}

export default CheckEmail;