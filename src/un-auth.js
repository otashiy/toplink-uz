import { Route, Routes } from "react-router-dom"
import Sign from "./components/sign/sign"
import NotFound from "./pages/not-found/not-found"


const UnAuthApp = () => {
    return (
        <Routes>
            <Route path="/sign" element={<Sign />} />
            <Route path="*" element={<NotFound />} />
            <Route />
        </Routes>
    )
}

export default UnAuthApp;