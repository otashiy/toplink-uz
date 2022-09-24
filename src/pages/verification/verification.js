import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const Verification = () => {

const codeRef = useRef();

const [error, setError] = useState("");

const navigate = useNavigate();


const handleFormSubmit = (evt) => {
evt.preventDefault();

const codeValue = codeRef.current.value;

if(codeValue) {

      
    fetch("http://207.154.246.125:8888/verificationcode", {
        method: "POST",
        body: JSON.stringify({
            "number": codeValue
        }),
        headers: {
            'Content-Type': 'application/json'
        }
})
.then(res => res.json())
.then(data => {
navigate("/new-password")
})
.catch(e => setError(e.message))

}
}

    return (
        <>
        <form onSubmit={handleFormSubmit} action="#">
            <label htmlFor="number">
                <input type="number" ref={codeRef} name="number" required placeholder="Ex. 123456" />
                <span>{error }</span>
            </label>

            <button type="submit">Qabul qilish</button>
        </form>
        </>
    )
}

export default Verification;