import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import Wallet from "./pages/Wallet";
import Withdrawal from "./pages/Withdrawal";
import Spend from "./pages/Spend";
import Receive from "./pages/Receive";
import { FaChevronLeft } from "react-icons/fa6";
import Topup from "./pages/Topup";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className="app"
      style={{
        overflow: "hidden",
        position: "relative",
        height: "98vh",
        width: "90vw",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {" "}
        {location.pathname ==
          ("/withdrawal" || "/topup" || "/spend" || "/receive") && (
          <FaChevronLeft
            size="4rem"
            color="var(--purple)"
            onClick={() => {
              navigate(-1);
            }}
          />
        )}
        {location.pathname == "/receive" && (
          <FaChevronLeft
            size="4rem"
            color="var(--purple)"
            onClick={() => {
              navigate(-1);
            }}
          />
        )}
        {location.pathname == "/spend" && (
          <FaChevronLeft
            size="4rem"
            color="var(--purple)"
            onClick={() => {
              navigate(-1);
            }}
          />
        )}
        {location.pathname == "/topup" && (
          <FaChevronLeft
            size="4rem"
            color="var(--purple)"
            onClick={() => {
              navigate(-1);
            }}
          />
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
        <Route path="/topup" element={<Topup />} />
      </Routes>
    </div>
  );
}

export default App;
