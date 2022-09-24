import { createContext, useEffect, useState } from "react"
import App from "../App";
import UnAuthApp from "../un-auth";

export const SignContext = createContext();

const SignProvider = () => {

const [token, setToken] = useState(localStorage.getItem("token"));

useEffect(() =>{
    if (token) {
        localStorage.setItem("token", token)
}
}, [token])
    return (
        <SignContext.Provider value={{ token, setToken }}>
            {token ? <App /> : <UnAuthApp />}
        </SignContext.Provider>
    )
};

export default SignProvider;

