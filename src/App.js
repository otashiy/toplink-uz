import { Route, Routes } from "react-router-dom";
import SignUp from "./components/sign-up/sign-up";
import Sign from "./components/sign/sign";
import Access from "./pages/access/access";
import CheckEmail from "./pages/checkemail/check-email";
import Main from "./pages/main/main";
import NewPassword from "./pages/new-password/new-password";
import NotFound from "./pages/not-found/not-found";
import MainSign from "./pages/sign/main-sign";
import Verification from "./pages/verification/verification";

function App() {
  return (
   <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/main-sign" element={<MainSign />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/sign" element={<Sign />} />
    <Route path="/check-email" element={<CheckEmail />} />
    <Route path="/access" element={<Access />} />
    <Route path="/verification" element={<Verification />} />
    <Route path="/new-password" element={<NewPassword />} />
    <Route path="*" element={<NotFound />} />
   </Routes>
  );
}

export default App;
