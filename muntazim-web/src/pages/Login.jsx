import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { login, start, stop } from "../features/appSlice";

import Spinner from "../components/Spinner";
import logo from "../asset/category/svg/muntazim-logo.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Container, Grid, Typography, Button } from "@mui/material";
import { Login as LoginApi } from "../services/apiService";
import { useNavigate } from "react-router-dom";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("The email field is required"),
  password: Yup.string()
    .min(8, "Password should be 8 characters long...")
    .required("The password field is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.app);

  const handleSubmit = async (values) => {
    const data = {
      email: values.email,
      password: values.password,
      role: "User",
    };
    try {
      dispatch(start());

      const res = await LoginApi(data);

      if (res?.data?.token) {
        dispatch(
          login({
            user: res?.data?.user,
            token: res?.data?.token,
          })
        );
        localStorage.setItem("access_token", res?.data?.token);
      }
      dispatch(stop());
    } catch (error) {
      dispatch(stop());
      toast.error(error?.response?.data?.error || JSON.stringify(error));
    }
  };
  const navigate = useNavigate();

  return (
    <div
      className="background flex items-center justify-center min-h-screen"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url('/assets/MacBook Air - 14.png')`,
      }}
    >
      <Container>
        <div className="flex justify-center mt-5">
          <LazyLoadImage src={logo} alt="Muntazim Logo" />
        </div>
        <Grid container sx={{ justifyContent: "center", marginTop: "2rem" }}>
          <Grid item xs={12} sm={11} md={9} lg={7} xl={7}>
            <div>
              <p className="text-xl font-medium text-center text-[#273660]">
                Login
              </p>
            </div>
            <div className="flex mt-4 gap-5 justify-center items-center">
              <div className="border border-[#E2E8F0] rounded-2xl p-4">
                <FacebookRoundedIcon sx={{ fontSize: 36, color: "#273660" }} />
              </div>
              <div className="border border-[#E2E8F0] rounded-2xl p-4">
                <AppleIcon sx={{ fontSize: 36, color: "#273660" }} />
              </div>
              <div className="border border-[#E2E8F0] rounded-2xl p-4">
                <GoogleIcon sx={{ fontSize: 36, color: "#273660" }} />
              </div>
            </div>
            <div className="mt-3">
              <p className="text-xl font-medium text-center text-[#273660]">
                or
              </p>
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="space-y-3 flex flex-col items-center">
                  <div className="flex  flex-col w-4/5 md:w-3/5 lg:w-2/4 items-start">
                    {errors.name && touched.name ? (
                      <div className="text-red-500 text-sm">{errors.name}</div>
                    ) : null}
                  </div>
                  <div className="flex w-4/5 md:w-3/5 lg:w-2/4 flex-col items-start">
                    <div className="text-[#323338] mb-1">Email</div>
                    <Field
                      name="email"
                      type="email"
                      className={`p-2 w-full rounded-md border border-[#C5C7D0 ${
                        errors.email && touched.email
                          ? "border-red-600"
                          : "border-slate-400"
                      }`}
                      placeholder="Your email address"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-500 text-sm">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="flex md:w-3/5 w-4/5 lg:w-2/4 flex-col items-start">
                    <div className="text-[#323338] mb-1">Password</div>
                    <Field
                      name="password"
                      type="password"
                      className={`p-2 w-full rounded-md border border-[#C5C7D0 ${
                        errors.password && touched.password
                          ? "border-red-600"
                          : "border-slate-400"
                      }`}
                      placeholder="Your password"
                    />
                    {errors.password && touched.password ? (
                      <div className="text-red-500 text-sm">
                        {errors.password}
                      </div>
                    ) : null}
                  </div>
                  <p className="text-center mt-1 text-[#033664]">
                    Don't have account?{" "}
                    <span
                      className="font-medium text-[#273660] ml-1 cursor-pointer"
                      onClick={() => navigate("/register")}
                    >
                      Sign Up
                    </span>
                  </p>
                  <div className="mt-3">
                    <button
                      variant="contained"
                      className="mt-5 flex gap-2 items-center bg-[#273660] px-5 dark:bg-slate-900 py-3 text-white rounded-md "
                      disabled={isLoading}
                      type="submit"
                    >
                      Login{isLoading && <Spinner />}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
        <div className="mt-16 ">
          <p className="text-sm text-center text-[#676879]">
            All Rights Reserved © Muntazim 2024
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Login;
