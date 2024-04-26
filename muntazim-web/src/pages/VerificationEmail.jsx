import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login, stop } from "../features/appSlice";
import { VerifyEmail } from "../services/apiService";

function VerificationEmail() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const verifyToken = async () => {
        try {
          const res = await VerifyEmail({token:token})
          toast.success(res?.data?.message);
          // If the request is successful, navigate the user to the home page
          navigate("/vendor-login");
        } catch (error) {
          // Handle any errors, e.g., token verification failed
          toast.error(error?.response?.data?.error || JSON.stringify(error));
          toast.error("Token verification failed");
          // You can also display an error message to the user if needed
        }
      };

      verifyToken();
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <p className="text-center text-black">wait for the verification</p>
      <p className="text-center text-black">you are being redirected</p>
    </div>
  );
}

export default VerificationEmail;
