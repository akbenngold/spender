import { Route, Routes } from "react-router-dom";
import Button from "./utilities/Button";
import Input from "./utilities/Input";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import Wallet from "./pages/Wallet";
import Withdrawal from "./pages/Withdrawal";
import Spend from "./pages/Spend";
import Receive from "./pages/Receive";

function App() {
  return (
    <>
      <h1>Spender</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/spend" element={<Spend />} />
        <Route path="/receive" element={<Receive />} />
      </Routes>
    </>
  );
}

export default App;
