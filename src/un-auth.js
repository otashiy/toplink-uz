import { Route, Routes } from "react-router-dom"
import Access from "./pages/access/access"
import Main from "./pages/main/main"
import NotFound from "./pages/not-found/not-found"



const UnAuthApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/access" element={<Access />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default UnAuthApp;