import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import Wallet from "./pages/Wallet";
import Withdrawal from "./pages/Withdrawal";
import Spend from "./pages/Spend";
import Receive from "./pages/Receive";
import { FaChevronLeft } from "react-icons/fa6";

function App() {
  const location = useLocation();

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {" "}
        {location.pathname ==
          ("/withdrawal" || "/topup" || "/spend" || "/receive") && (
          <FaChevronLeft size="4rem" color="var(--purple)" />
        )}{" "}
        <h1>Spender</h1>
      </div>

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
