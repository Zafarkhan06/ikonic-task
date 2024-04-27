import React, { useEffect, useState } from "react";
import { Button, Card, CardContent,Pagination  } from "@mui/material";
import axios from "axios";
import { getToken } from "../../helpers/getToken";
import Comment from "./Comment";
import { useNavigate } from "react-router-dom";
function Main() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [subServices, setSubServices] = useState(false); // State variable to store sub-services data
  const [subServicesData, setSubServicesData] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/get-feedback`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setFeedbackData(response.data); // Set feedback data received from the backend
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("the here", feedbackData);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = feedbackData.slice(indexOfFirstItem, indexOfLastItem);
  
 
  const handleCardClick = async (id) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("user_id", id);
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/get-feedbacks?feedback_id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      setSubServices(true);
      setSubServicesData(response?.data);
      console.log("Response from backend:", response.data);
    } catch (error) {
      // Handle error
      console.error("Error while submitting data:", error);
      setSubServices(false);
    }
  };
  const navigateBack = () => {
    // Implement your navigation logic here, such as changing state to go back to the previous view
    setSubServices(false);
  };
  console.log("selected service", selectedService);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const isDataLoaded = feedbackData && feedbackData.length > 0;
  return (
    <div className="mt-5 min-h-screen"> 
      {subServices ? (
        <Comment navigateBack={navigateBack} serviceName={selectedService} subServicesData={subServicesData} />
      ) : (
        <>
      <div className="flex justify-end">
      <Button variant="contained" onClick={() => navigate('/dashboard/enter-review')}>Add Feedback</Button>
      </div>
      <div>
        <Card
          sx={{
            mt: 3,
            paddingBottom: "1.5%",
            "& .MuiCardContent-root": { padding:{ sm: '10px', lg: '40px'} , px: {sm: '10px', lg: '40px'}  },
            borderRadius: "0.75rem",
            background: "white",
            boxShadow: "none",
            minHeight: "50vh",
          }}
        >
          <CardContent>
            {currentItems.map((feedback,index) => (
              <div
              onClick={() => {
                handleCardClick(feedback?.id);
                setSelectedService(feedback?.name);
              }}
                key={feedback.id}
                className="flex gap-3 mt-5 border-2 border-[#273660] pl-3 rounded-lg items-center"
              >
                <p className="text-[#273660] text-xl font-bold px-2">{(currentPage - 1) * itemsPerPage + index + 1}</p>
                <div className="flex flex-wrap justify-between w-full bg-[#273660] text-white px-2 py-1 md:px-5 md:py-3 shadow">
                  <div className="flex flex-col items-start justify-start">
                    <p className="md:text-lg md:font-medium">Title</p>
                    <p className="md:text-xl text-lg md:font-semibold capitalize">
                      {feedback.title}
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <p className="md:text-lg md:font-medium">Category</p>
                    <p className="md:text-xl text-lg md:font-semibold capitalize">
                      {feedback.category}
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <p className="md:text-lg text-center md:font-medium">Added By</p>
                    <p className="md:text-xl text-center text-lg md:font-semibold capitalize">
                      {feedback.user_name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
           <div className="mt-3 flex justify-center">
            <Pagination
              count={Math.ceil(feedbackData.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </div>
          </CardContent>
        </Card>
      </div>
        </>

      )}
      
    </div>
  );
}

export default Main;
