import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import ForgetPassword from "./pages/ForgetPassword";

import VendorRegister from "./vendor Dashboard/Register/VendorRegister.jsx";
import VendorLogin from "./vendor Dashboard/Login/Login";
import VerificationEmail from "./pages/VerificationEmail";
import Dashboard from "./vendor Dashboard/dashboard/Index";
import Main from "./vendor Dashboard/dashboard/Main";
import EnterReview from "./vendor Dashboard/enterReview/EnterReview.jsx";
import "./App.css";
import Toaster from "./components/Toaster.jsx";

function App() {
  const { user } = useSelector((state) => state.app);
  const isVendorAdmin = user?.roles?.[0]?.name;
  

  return (
    <div className="App">
      <Toaster />
      <Routes>
        {isVendorAdmin === "VendorAdmin" ? (
          <>
            <Route
              path="/dashboard/main"
              element={
                <Dashboard>
                  <Main />
                </Dashboard>
              }
            />
            <Route
              path="/dashboard/enter-review"
              element={
                <Dashboard>
                  <EnterReview />
                </Dashboard>
              }
            />

            <Route
              path="*"
              element={<Navigate to={"/dashboard/main"} replace />}
            />
          </>
        ) : (
          <>
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/password-reset" element={<ResetPassword />} />
            <Route path="*" element={<Navigate to={"/"} replace />} />
            <Route path="/verifying" element={<VerificationEmail />} />
            <Route path="/" element={<VendorLogin />} />
            <Route path="/vendor-register-test" element={<VendorRegister />} />
            <Route path="/vendor-register" element={<VendorRegister />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
