import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Box,
  Grid,
  CardContent,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import upload_company_logo from "../../asset/category/images/upload_company_logo.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import FirstStep from "./firstStepServices";
import SecondStep from "./secondStepServices";
import ThirdStep from "./thirdServices";

const AddServicesSchema = Yup.object().shape({
  name: Yup.string().required("The service name field is required"),
  price: Yup.number()
    .positive()
    .integer()
    .required("The price field is required"),
  area: Yup.string().required("The area field is required"),
  description: Yup.string().required("Service description is required"),
});

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function AddServices() {
  const { user } = useSelector((state) => state.app);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [formData, setFormData] = useState({});
  const [images, setImages] = useState([]);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = (stepValues) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...stepValues,
    }));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      // Add images to form data
      images.forEach((image, index) => {
        formDataToSend.append(`images[${index}]`, image);
      });
      // Combine form data and images
      // const combinedData = {
      //   ...formData,
      //   images: images, // assuming images are stored as an array of URLs
      // };

      for (const pair of formDataToSend.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      for (const key of formDataToSend.keys()) {
        console.log(key);
      }
      // Send combined data to backend
      const response = await axios.post(
        "http://localhost:8000/api/create-service",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response from backend:", response.data);

      // Reset form data and images after successful submission
      setFormData({});
      setImages([]);

      // Reset stepper to first step
      setActiveStep(0);

      // Show success message to the user
      toast.success("Service added successfully!");
    } catch (error) {
      // Handle error
      console.error("Error while submitting data:", error);
      toast.error("Failed to add service. Please try again later.");
    }
  };

  //the stepper handling ends here
  console.log("form data of parent", formData);
  const steps = ["Details", "Gallery", "Packages", "Preview"];
  const stepsDetails = [
    "Please add your service details here",
    "Please add your service images here",
    "Please add some packages for your customers",
    "Please take a look and publish your service.",
  ];

  console.log("users data",user);
  return (
    <>
      <div className="text-left mt-6">
        <p className="text-2xl font-bold text-black">Add new Services</p>
      </div>

      <Grid container sx={{ justifyContent: "center", marginTop: "1.5rem" }}>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Card
            sx={{
              "& .MuiCardContent-root": { padding: "10px" },
              borderRadius: "0.75rem",
              background: "white",
              boxShadow: "none",
            }}
          >
            <CardContent>
              <Stepper
                activeStep={activeStep}
                sx={{ backgroundColor: "white" }}
              >
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  labelProps.optional = (
                    <p className=" text-start text-xs text-[#323338]">
                      {stepsDetails[index]}
                    </p>
                  );
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step
                      sx={{
                        py: 2,
                        px: 2,
                        "& .MuiStepLabel-root .Mui-completed ": {
                          color: "#273660", // circle color (COMPLETED)
                        },

                        "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                          {
                            color: "#323338", // Just text label (COMPLETED)
                          },
                        "& .MuiStepLabel-root .Mui-active": {
                          color: "#273660", // circle color (ACTIVE)
                        },
                        "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                          {
                            color: "#323338", // Just text label (ACTIVE)
                          },
                        "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                          fill: "white", // circle's number (ACTIVE)
                        },
                      }}
                      key={label}
                      {...stepProps}
                    >
                      <StepLabel sx={{ padding: "0px" }} {...labelProps}>
                        {" "}
                        <p className="text-[#323338] font-semibold text-start">
                          {label}
                        </p>
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {/* {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    Step {activeStep + 1}
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    {isStepOptional(activeStep) && (
                      <Button
                        color="inherit"
                        onClick={handleSkip}
                        sx={{ mr: 1 }}
                      >
                        Skip
                      </Button>
                    )}

                    <Button onClick={handleNext}>
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Box>
                </React.Fragment>
              )} */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div className="mt-10">
        {activeStep === 0 && <FirstStep onNext={handleNext} />}
      </div>
      <div className="mt-10">
        {activeStep === 1 && (
          <SecondStep
            onNext={handleNext}
            updateImages={updateImages}
            onBack={handleBack}
          />
        )}
      </div>
      <div className="mt-10">
        {activeStep === 2 && (
          <ThirdStep
            onNext={handleNext}
            onBack={handleBack}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </>
  );
}

export default AddServices;
