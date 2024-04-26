import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import useDarkTheme from "./hooks/useDarkMode";

import Profile from "./pages/Profile";
//import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import SubCategories from "./pages/SubCategories";
import { CategoryGuide } from "./pages/CategoryGuide";
import { CategoryProgramChapters } from "./pages/CategoryProgramChapters";
import ForgetPassword from "./pages/ForgetPassword";
import Toaster from "./components/Toaster";
import EditBookmarks from "./pages/EditBookmarks";
import FolderBookmarks from "./pages/FolderBookmarks";
import Annotation from "./pages/Annotation";
import Layout from "./components/Layout";
import OnBoardingSteps from "./vendor Dashboard/onBoardingSteps/onBoardingSteps";
import VendorRegister from "./vendor Dashboard/Register/VendorRegister.jsx";
import VendorLogin from "./vendor Dashboard/Login/Login";
import AddServices from "./vendor Dashboard/addServices/addServices";
import VerificationEmail from "./pages/VerificationEmail";
import Home from "./userSide/home/Home";
import Dashboard from "./vendor Dashboard/dashboard/Index";
import Main from "./vendor Dashboard/dashboard/Main";
import ServiceAvailability from "./vendor Dashboard/serviceAvailability/ServiceAvailability";
import "./App.css";

function App() {
  const   Local_storage_key = "onboardingAnswers"
  const { user } = useSelector((state) => state.app);
  const [colorTheme, setTheme] = useDarkTheme();
  //const [Answers, setAnswers] = useState([]);

  const [Answers , setAnswers] = useState(() => {
    return JSON.parse(localStorage.getItem(Local_storage_key)) || []
})


  //console.log("user dara", user);
  const isVendorAdmin = user?.roles?.[0]?.name;
/*
  useEffect(() => {
    const storedAnswers = localStorage.getItem("onboardingAnswers");
    //console.log("stored_answers_retrieved" , storedAnswers);
    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers));
    }
  }, [Answers]);
*/
  

  //console.log("isVendorAdmin", isVendorAdmin);
  //console.log("length")
  //console.log(Object.values(Answers).length)








  //const hasCompletedOnboarding = Object.keys(Answers).length  > 0;

  const onboardingAnswers = localStorage.getItem('onboardingAnswers');
  const hasCompletedOnboarding = onboardingAnswers && Object.keys(Answers).every(key => {
    const value = Answers[key];
    return value !== null && value !== '' && !(Array.isArray(value) && value.length === 0);
});




  

  //console.log("has completed")
  console.log(hasCompletedOnboarding);

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
              path="/dashboard/addservice"
              element={
                <Dashboard>
                  <AddServices />
                </Dashboard>
              }
            />
            <Route
              path="/dashboard/availability"
              element={
                <Dashboard>
                  <ServiceAvailability />
                </Dashboard>
              }
            />
            <Route
              path="*"
              element={<Navigate to={"/dashboard/main"} replace />}
            />
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/password-reset" element={<ResetPassword />} />
            <Route path="*" element={<Navigate to={"/"} replace />} />
            <Route path="/onboarding" element={<OnBoardingSteps />} />
            <Route path="/verifying" element={<VerificationEmail />} />
            <Route path="/vendor-login" element={<VendorLogin />} />
            <Route path="/vendor-register-test" element={<VendorRegister />} />
            
            {!hasCompletedOnboarding ? (
              
              <Route path="/vendor-register" element={<Navigate to={"/onboarding"} replace />} />
            ) : (
              <Route path="/vendor-register" element={<VendorRegister />} />
            )}
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
