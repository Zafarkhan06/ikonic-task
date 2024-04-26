import React,{useEffect} from "react";
import { Grid, Card, Typography, Box, TextField, Button } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import frame_2 from "../../../asset/category/svg/sitting-person.svg";
import frame_5 from "../../../asset/category/images/frame-5.png";
import frame_6 from "../../../asset/category/images/frame_6.png";


const FirstStep = ({ onNext, onPrevious, inputValue, inputErrorPage1, handleInputChange }) => {
  
  return (
    <Grid container sx={{ justifyContent: "center", }}>
      <Grid item xs={12} sm={11} md={9} lg={7} xl={7}>
       
        <div className="mt-7">
          <p className="text-xl text-black text-start ">
            What is your business name?{" "}
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
            placeholder="Please enter you full name here"
            name="business_title"
            helperText="Hint: KK Photography "
            value={inputValue}
            onChange={handleInputChange}
          />
          {inputErrorPage1 && (
            <div className="flex mt-3 justify-start">
              <Typography sx={{ textAlign: "start" }} variant="caption" color="error">
                {inputErrorPage1}
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
            onClick={onNext}
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

export default FirstStep;
