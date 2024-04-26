import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from 'react-toastify';
import { Field, Form, Formik } from "formik";
import {
  Breadcrumbs,
  Link as MUILink,
  Typography,
  Container,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import logo from "../asset/category/svg/muntazim-logo.svg";

import { useLocation } from "react-router-dom"; // Import the useLocation hook

import Spinner from "../components/Spinner";

import { logout, start, stop } from "../features/appSlice";

import { passwordReset } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";


const resetPasswordSchema = Yup.object().shape({
    newPassword: Yup
        .string()
        .required('The new password field is required')
        .min(8, 'New Password must be 8 characters long'),
    confirmPassword: Yup
        .string()
        .required('The confirm password field is required')
        .oneOf([Yup.ref('newPassword'), null], 'Must match "New Password" field value'),
});

const ResetPassword = () => {
  const { isLoading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.app);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false); // State to toggle password visibility
  const location = useLocation(); // Use the useLocation hook to get the current URL
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const email = queryParams.get("email");
  const navigate = useNavigate();

  const handleResetPassword = async (values) => {
    const data = {
      confirm_password: values.currentPassword,
      new_password: values.newPassword,
      token: token,
      email: email,
    };
    console.log(data);

    dispatch(start());
    return await passwordReset(data, dispatch)
      .then((res) => {
        if (res) {
          toast.success("Your password has successfully updated!");

          dispatch(stop());
          dispatch(logout());
          navigate('/')
        }
      })
      .catch((error) => {
        dispatch(stop());
        toast.error(error?.response?.data?.message);
      });
  };
  useEffect(() => {
    return () => {
      dispatch(stop()); // Clear loading state on component unmount
    };
  }, []);

  return (
    <>
      <div className=" w-full flex items-center flex-col justify-center min-h-screen bg-[#FAFBFF]">
        <Container className="datepicker-border">
          <div className="flex justify-center mt-3">
            <LazyLoadImage src={logo} alt="Muntazim Logo" width="30%" />
          </div>
          <p className="mt-10 text-4xl font-bold text-[#033664]">
            Reset Password
          </p>
          <Grid
            pb={1}
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <Grid item xs={12} sm={11} md={8} lg={5}>
              <Formik
                initialValues={{
                  currentPassword: "",
                  newPassword: "",
                }}
                validationSchema={resetPasswordSchema}
                onSubmit={(values) => {
                  handleResetPassword(values);
                }}
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
                      handleResetPassword(values); // Call your custom submit handler
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
                      placeholder="sydtw23@asq1"
                      label="Password"
                      variant="outlined"
                      name="currentPassword"
                      type={showPassword ? "text" : "password"}
                      value={values.currentPassword}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton // Eye icon button
                              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.currentPassword && touched.currentPassword}
                      helperText={
                        errors.currentPassword &&
                        touched.currentPassword &&
                        errors.currentPassword
                      }
                    />

                    <TextField
                      InputLabelProps={{
                        shrink: true,
                        style: { color: "#033664" },
                      }}
                      required
                      name="newPassword"
                      sx={{ mt: 3 }}
                      fullWidth
                      id="outlined-basic"
                      placeholder="*************"
                      label="Confirm Password"
                      variant="outlined"
                      value={values.newPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type={showPasswordConfirm ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton // Eye icon button
                              onClick={() =>
                                setShowPasswordConfirm(!showPasswordConfirm)
                              } // Toggle password visibility
                            >
                              {showPasswordConfirm ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      error={errors.newPassword && touched.newPassword}
                      helperText={
                        errors.newPassword &&
                        touched.newPassword &&
                        errors.newPassword
                      }
                    />
                    <div>
                      <button
                        variant="contained"
                        fullWidth
                        className="mt-3 w-full bg-[#273660] dark:bg-slate-900 py-3 text-white rounded-[76px] "
                        type="submit"
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ResetPassword;
