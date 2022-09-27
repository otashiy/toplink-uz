import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {

const emailRef = useRef();
const passwordRef = useRef();

const navigate = useNavigate();

const [error, setError] = useState("");

const handleFormSubmit = (evt) => {
evt.preventDefault();

const emailValue = emailRef.current.value;
const passwordValue = passwordRef.current.value;

if(emailValue && passwordValue) {
    fetch("http://207.154.246.125:8888/newpassword", {
        method: "PUT",
        body: JSON.stringify({
            "email": emailValue,
            "password": passwordValue
        }),
        headers: {
            'Content-Type': 'application/json'
        }
})
.then(res => {
if(res.ok) {
    res.json()
}
})
.then(data => {
console.log(data);
navigate("/main-sign")
})
.catch(e => setError(e.message))
}
}

    return(
        <>
        <h1>New password</h1>
        <form onSubmit={handleFormSubmit} action="#">
            <label htmlFor="email">
                <input type="email" ref={emailRef} name="email" id="email" required placeholder="New email" />
                <span>{error}</span>
            </label>

            <label htmlFor="email">
                <input type="password" ref={passwordRef} name="password" id="password" required placeholder="New password" />
                <span></span>
            </label>

            <button type="submit">Qabul qilish</button>
        </form>
        </>
    )
}

export default NewPassword;