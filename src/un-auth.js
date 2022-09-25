import { Route, Routes } from "react-router-dom"
import Sign from "./components/sign/sign"
import Main from "./pages/main/main"
import NotFound from "./pages/not-found/not-found"
import MainSign from "./pages/sign/main-sign"


const UnAuthApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/main-sign" element={<MainSign />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default UnAuthApp;