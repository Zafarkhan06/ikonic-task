import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { toast } from "react-toastify";
import { start, stop } from "../../features/appSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../asset/category/svg/ikonic-logo.png";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Register } from "../../services/apiService";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("The name field is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("The email field is required"),
  password: Yup.string()
    .min(8, "Password should be 8 characters long...")
    .required("The password field is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const VendorRegister = () => {
  const [answers, setAnswers] = useState([]);
  const { isLoading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(stop()); // Clear loading state on component unmount
    };
  }, []);

  const handleSubmit = async (values) => {
    console.log(values);
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
      role: "VendorAdmin",
      confirm_password: values.confirm_password,
    };

    console.log(data);

    try {
      dispatch(start());
      const res = await Register(data);
      dispatch(stop());
      console.log(res.data.user);
      toast.success("user registered successfully, login please");
      navigate("/vendor-login");
    } catch (error) {
      toast.error(error?.response?.data?.error || JSON.stringify(error));
    }
  };

  //console.log("onboarding answers", answers);
  return (
    <div className="flex min-h-screen">
      <div className="lg:w-2/5 w-full flex items-center">
        <Container className="datepicker-border">
          <div className="flex justify-center mt-3">
            <LazyLoadImage src={logo} alt="ikonic Logo" width="30%" />
          </div>
          <p className="mt-5 text-3xl font-bold text-[#033664]">Sign up here</p>
          <Grid
            pb={1}
            container
            sx={{
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Grid item xs={12} sm={11} md={10} lg={9} xl={7}>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  confirm_password: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  handleChange,
                  handleBlur,
                  errors,
                  touched,
                  isValid,
                }) => (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault(); // Prevent default form submission
                      handleSubmit(values); // Call your custom submit handler
                    }}
                  >
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                        style: { color: "#033664" },
                      }}
                      required
                      fullWidth
                      id="outlined-basic"
                      placeholder="Your name"
                      label="Name"
                      variant="outlined"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.name && touched.name}
                      helperText={errors.name && touched.name && errors.name}
                    />
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                        style: { color: "#033664" },
                      }}
                      required
                      sx={{ mt: 3 }}
                      fullWidth
                      id="outlined-basic"
                      placeholder="Phone number, email address"
                      label="Email"
                      variant="outlined"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.email && touched.email}
                      helperText={errors.email && touched.email && errors.email}
                    />
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                        style: { color: "#033664" },
                      }}
                      required
                      fullWidth
                      sx={{ mt: 3 }}
                      id="outlined-basic"
                      placeholder="sydtw23@asq1"
                      label="Password"
                      variant="outlined"
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.password && touched.password}
                      helperText={
                        errors.password && touched.password && errors.password
                      }
                    />
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                        style: { color: "#033664" },
                      }}
                      required
                      fullWidth
                      sx={{ mt: 3 }}
                      id="outlined-basic"
                      placeholder="***************"
                      label="Confirm Password"
                      variant="outlined"
                      type="password"
                      name="confirm_password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors.confirm_password && touched.confirm_password
                      }
                      helperText={
                        errors.confirm_password &&
                        touched.confirm_password &&
                        errors.confirm_password
                      }
                    />
                    <div className="flex justify-start">
                      {" "}
                      <FormControlLabel
                        sx={{ mt: 0, color: "#033664" }}
                        control={
                          <Checkbox
                            sx={{
                              color: "#00000033",
                              "&.Mui-checked": {
                                color: "#033664",
                              },
                            }}
                          />
                        }
                        label="Remember me"
                      />
                    </div>

                    <div>
                      <button
                        variant="contained"
                        fullWidth
                        className="mt-3 w-full bg-[#273660] dark:bg-slate-900 py-3 text-white rounded-[76px] "
                        type="submit"
                        disabled={!isValid}
                      >
                        Sign Up
                      </button>
                    </div>

                    <p className="text-center mt-2 text-[#033664]">
                      Already have account?{" "}
                      <span
                        className="font-medium text-[#3198F5] ml-1 cursor-pointer"
                        onClick={() => navigate("/vendor-login")}
                      >
                        Login
                      </span>
                    </p>
                  </form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="bg-[#033664] blue-background w-3/5 hidden lg:block "></div>
    </div>
  );
};
export default VendorRegister;
