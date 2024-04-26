import React, { useState } from "react";
import { Grid, Card, Typography, Box, TextField, Button } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import frame_2 from "../../../asset/category/svg/page2_frame.svg";
import frame_5 from "../../../asset/category/images/frame-5.png";
import frame_6 from "../../../asset/category/images/frame_6.png";
import { useNavigate } from 'react-router-dom';


const FifthStep = ({ onNext, onPrevious, handleInputChange, inputValue }) => {
  const [inputErrorPage5, setInputErrorPage5] = useState("");
  //   const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (inputValue.trim() === "") {
      setInputErrorPage5("Please add email of your business.");
      return; // Return early if there's an error
    } else {
      onNext();
     
    }
  };
  const handleChange = (e) => {
    handleInputChange(e); // Pass the event to parent component
    setInputErrorPage5(""); // Clear input error
  };
  return (
    <Grid container sx={{ justifyContent: "center",  }}>
      <Grid item xs={12} sm={11} md={9} lg={7} xl={7}>
        {/* <Card
          sx={{
            boxShadow: "0px 0px 10px 0px #959BA11A",
            borderRadius: "16px",
            border: "0.59px solid #CFD8DE",
          }}
        >
          <Box
            sx={{
              display: "flex",
              paddingTop: "0.5rem",
              justifyContent: "space-between",
              borderRadius: "10px",
              backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7)),url(${frame_5}),url(${frame_6})`, // Set the background image
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundOpacity: "0.1",
              backgroundBlendMode: "luminosity",
            }}
          >
            <Box
              sx={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginLeft: "6.5%",
                  color: "#000000",
                }}
              >
                5 of 5: Question{" "}
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginLeft: "6.5%", color: "#6F6B64" }}
              >
                Please answer a few questions
              </Typography>
            </Box>
            <div className="flex w-[40%]  justify-start">
              <LazyLoadImage src={frame_2} alt="onboarding step" />
            </div>
          </Box>
        </Card> */}
        <div className="mt-7">
          <p className="text-xl text-black text-start ">
          Please enter your business Gmail.
          </p>
          <TextField
            InputProps={{
              style: {
                borderRadius: "16px",
                boxShadow: "0px 0px 10px 0px #959BA11A",
              },
            }}
            sx={{ marginTop: "0.7rem" }}
            fullWidth
            type="text"
            color="secondary"
            id="business_name"
            placeholder="Please enter your business gmail"
            name="business_title"
            helperText="Hint: outlook@gmail.com "
            value={inputValue}
            onChange={handleChange}
          />
          {inputErrorPage5 && (
            <div className="flex mt-3 justify-start">
              <Typography
                sx={{ textAlign: "start" }}
                variant="caption"
                color="error"
              >
                {inputErrorPage5}
              </Typography>
            </div>
          )}
        </div>
        <div className="flex mt-10 justify-between">
          <Button
            color="secondary"
            sx={{ border: " 1px solid #C5C7D0" }}
            size="large"
            variant="outlined"
            onClick={onPrevious}
          >
            <span className="text-[#323338] capitalize">Previous</span>
          </Button>
          <Button
            onClick={handleNext}
            color="primary"
            sx={{
              backgroundColor: "#374C87",
              "&:hover": { backgroundColor: "#102a72" },
            }}
            size="large"
            variant="outlined"
          >
            <span className="text-white capitalize">Next</span>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default FifthStep;
