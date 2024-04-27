import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Modal,
} from "@mui/material";
import { toast } from "react-toastify";
import { start, stop, login } from "../../features/appSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../asset/category/svg/ikonic-logo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Frame from "../../asset/category/svg/Frame.svg";
import { Login as LoginApi} from "../../services/apiService";
const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("The email field is required"),
  password: Yup.string()
    .min(8, "Password should be 8 characters long...")
    .required("The password field is required"),
});

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("The email field is required"),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  px: 2,
  py: 2,
};

const Login = () => {
  const { isLoading } = useSelector((state) => state.app);
  const [openModal, setOpenModal] = useState(false);

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
      email: values.email,
      password: values.password,
      role: "VendorAdmin"
    };

    console.log(data);

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
      toast.success(res?.data?.message);

      navigate("/dashboard/addservice");
    } catch (error) {
      toast.error(error?.response?.data?.error || JSON.stringify(error));
    }
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleResetPassword = async (values) => {
    const data = {
      email: values.email,
    };
    try {
      dispatch(start());

      const res = await axios.post(
        `${process.env.REACT_APP_URL}/api/forget-password`,
        data
      );

      dispatch(stop());
      toast.success(res?.data?.message);
    } catch (error) {
      dispatch(stop());
      toast.error(error?.response?.data?.message || JSON.stringify(error));
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="lg:w-2/5 w-full flex items-center">
        <Container className="datepicker-border">
          <div className="flex justify-center mt-3">
            <LazyLoadImage src={logo} alt="ikonic Logo" width="30%" />
          </div>
          <p className="mt-5 text-3xl font-bold text-[#033664]">Log In here</p>
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
                  email: "",
                  password: "",
                }}
                validationSchema={SignInSchema}
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

                    <div className="flex justify-between items-center">
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
                      <p
                        className="text-base text-[#3198F5] cursor-pointer"
                        onClick={handleOpenModal}
                      >
                        Forgot password?
                      </p>
                    </div>

                    <div>
                      <button
                        variant="contained"
                        fullWidth
                        className="mt-3 w-full bg-[#273660] dark:bg-slate-900 py-3 text-white rounded-[76px] "
                        type="submit"
                        disabled={!isValid}
                      >
                        Login
                      </button>
                    </div>
                   
                    <p className="text-center mt-2 text-[#033664]">
                      Don’t have an account?
                      <span className="font-medium cursor-pointer text-[#3198F5] ml-1" onClick={()=>navigate("/vendor-register")}>SignUp</span>
                    </p>
                  </form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div
        className="bg-[#033664] signup-background w-3/5 hidden lg:block  "
      ></div>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container sx={style}>
          <div className="flex justify-end">
            <CloseIcon
              className="cursor-pointer"
              onClick={() => {
                setOpenModal(false);
              }}
            />
          </div>
          <div className="mb-5 flex flex-col items-center">
            <LazyLoadImage src={Frame} alt="Frame" width="55%" />
            <p className="mb-5 mt-5">
              Please enter your Email for reset password link
            </p>
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={ForgotPasswordSchema}
              onSubmit={handleResetPassword}
            >
              {({
                values,
                handleChange,
                handleBlur,
                errors,
                touched,
                isValid,
              }) => (
                <Form>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                      style: { color: "#033664" },
                    }}
                    required
                    fullWidth
                    sx={{ mb: 2 }}
                    id="forgot-password-email"
                    placeholder="Enter your email"
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email}
                    helperText={errors.email && touched.email && errors.email}
                  />

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#273660",
                      color: "#fff",
                      borderRadius: "10px",
                      padding: "10px",
                      px: 3,
                      fontSize: "14px",
                      fontWeight: "normal",
                      textTransform: "capitalize",
                      "&:hover": { backgroundColor: "#273660" },
                      textAlign: "center",
                    }}
                    type="submit"
                  >
                    Send Email
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </Modal>
    </div>
  );
};
export default Login;
