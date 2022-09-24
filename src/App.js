import { Route, Routes } from "react-router-dom";
import SignUp from "./components/sign-up/sign-up";
import Sign from "./components/sign/sign";
import Access from "./pages/access/access";
import Login from "./pages/login/login";
import Main from "./pages/main/main";
import NotFound from "./pages/not-found/not-found";

function App() {
  return (
   <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/sign" element={<Sign />} />
    <Route path="/login" element={<Login />} />
    <Route path="/access" element={<Access />} />
    <Route path="*" element={<NotFound />} />
   </Routes>
  );
}

export default App;
