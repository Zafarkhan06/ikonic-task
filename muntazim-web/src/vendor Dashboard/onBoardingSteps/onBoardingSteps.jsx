import React, { useState, useEffect } from "react";
import { Container, Card, Box, Typography, Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../asset/category/svg/muntazim-logo.svg";
import frame_2 from "../../asset/category/svg/sitting-person.svg";
import frame_5 from "../../asset/category/images/frame-5.png";
import frame_6 from "../../asset/category/images/frame_6.png";
import frame_3 from "../../asset/category/svg/page2_frame.svg";
import { useNavigate } from 'react-router-dom';
import FirstStep from "./allSteps/firstStep";
import SecondStep from "./allSteps/secondStep";
import ThirdStep from "./allSteps/thirdStep";
import FourthStep from "./allSteps/fourthStep";
import FifthStep from "./allSteps/fifthStep";
const OnBoardingSteps = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState({
    answer_1: "",
    answer_2: [],
    answer_3: "",
    answer_4: "",
    answer_5: "",
  });
  const [inputValue, setInputValue] = useState("");
  const [inputErrorPage1, setInputErrorPage1] = useState("");
  const [selectedServices, setSelectedServices] = useState([]); // State to track selected services
  const [inputValuePage3, setInputValuePage3] = useState("");
  const [inputValuePage4, setInputValuePage4] = useState("");
  const [inputValuePage5, setInputValuePage5] = useState("");

  //storing the answers in local storage
  useEffect(() => {
    localStorage.setItem("onboardingAnswers", JSON.stringify(answers));
  }, [answers]);

  useEffect(() => {
    console.log("Answers:", answers);
  }, [answers]);

 

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
    setInputErrorPage1(""); // Clear input error
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setInputErrorPage1(""); // Clear input error
  };

  const handleInputChangePage3 = (e) => {
    setInputValuePage3(e.target.value);
  };
  const handleServiceChange = (selectedServices) => {
    setSelectedServices(selectedServices);
  };
  const handleInputChangePage4 = (date) => {
    if (date) {
      const year = new Date(date).getFullYear(); // Extract the year from the date
      setInputValuePage4(year); // Store only the year in inputValuePage4
    } else {
      setInputValuePage4(""); // If date is null or undefined, set inputValuePage4 to empty string
    }
  };

  const handleInputChangePage5 = (e) => {
    setInputValuePage5(e.target.value);
  };

  //This program contains
  const handleNextPage = () => {
    if (currentPage === 1) {
      if (inputValue.trim() === "") {
        setInputErrorPage1("Input field cannot be empty.");
        return;
      } else {
        setAnswers({ ...answers, answer_1: inputValue });
        setCurrentPage(currentPage + 1);
      }
    } else if (currentPage === 2) {
      setAnswers({ ...answers, answer_2: selectedServices });
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 3) {
      setAnswers({ ...answers, answer_3: inputValuePage3 });
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 4) {
      setAnswers({ ...answers, answer_4: inputValuePage4 });
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 5) {
      setAnswers({ ...answers, answer_5: inputValuePage5 });
      console.log("Answers after setting answer for question 5:", answers);
      setCurrentPage(currentPage + 1);
    }

    setInputValue("");
    setInputErrorPage1("");
    setSelectedServices([]);
  };

  useEffect(() => {
    // Check if all steps' data is present in the answers state
    if ( answers.answer_5 !== "") {
      console.log("navigation to vendor-register")
      navigate('/vendor-register-test');
    }
 }, [currentPage]); 

 console.log("currentPage", currentPage);
  return (
    <Container sx={{ paddingBottom: "1%" }}>
      <div className="flex justify-center my-10">
        <LazyLoadImage src={logo} alt="Muntazim Logo" />
      </div>
      <Grid container sx={{ justifyContent: "center", marginTop: "4rem" }}>
        <Grid item xs={12} sm={11} md={9} lg={7} xl={7}>
          <Card
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
                backgroundSize: "75%",
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
                  {currentPage === 1 && "1 of 5: Question"}
                  {currentPage === 2 && "2 of 5: Question"}
                  {currentPage === 3 && "3 of 5: Question"}
                  {currentPage === 4 && "4 of 5: Question"}
                  {currentPage === 5 && "5 of 5: Question"}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginLeft: "6.5%", color: "#6F6B64" }}
                >
                  Please answer a few questions
                </Typography>
              </Box>
              <div className="flex w-[40%]  justify-start">
              <LazyLoadImage src={currentPage === 1 ? frame_2 : frame_3} alt="onboarding step" />
              </div>
            </Box>
          </Card>
        </Grid>
      </Grid>
      {currentPage === 1 ? (
        <FirstStep
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          inputValue={inputValue}
          inputErrorPage1={inputErrorPage1}
          handleInputChange={handleInputChange}
        />
      ) : (
        ""
      )}
      {currentPage === 2 ? (
        <SecondStep
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          handleServiceChange={handleServiceChange} // Pass callback to update selected services
          selectedServices={selectedServices}
        />
      ) : (
        ""
      )}

      {currentPage === 3 ? (
        <ThirdStep
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          inputValue={inputValuePage3}
          handleInputChange={handleInputChangePage3}
        />
      ) : (
        ""
      )}

      {currentPage === 4 ? (
        <FourthStep
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          inputValue={inputValuePage4}
          handleInputChange={handleInputChangePage4}
        />
      ) : (
        ""
      )}

      {currentPage === 5 ? (
        <FifthStep
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          inputValue={inputValuePage5}
          handleInputChange={handleInputChangePage5}
        />
      ) : (
        ""
      )}
      {/* Add additional conditions for rendering other steps */}
    </Container>
  );
};

export default OnBoardingSteps;
