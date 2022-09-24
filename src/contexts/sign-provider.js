import { createContext, useEffect, useState } from "react"
import App from "../App";
import UnAuthApp from "../un-auth";

export const SignContext = createContext();

const SignProvider = () => {

const [token, setToken] = useState(localStorage.getItem("vdkjbvscsovbur98vhuwjbv98sgbiu29wvg87762fvugvc76f2vuyf83g374"));

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

