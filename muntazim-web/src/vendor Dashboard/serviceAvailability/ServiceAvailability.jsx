import React, { useState, useEffect } from "react";
import hall from "../../asset/category/svg/hall.svg";
import hall_white from "../../asset/category/svg/hall-white.svg";

import catering from "../../asset/category/svg/catering.svg";
import catering_blue from "../../asset/category/svg/catering-blue.svg";

import camera from "../../asset/category/svg/camera.svg";
import camera_white from "../../asset/category/svg/camera-white.svg";

import barber from "../../asset/category/svg/barber.svg";
import clothing from "../../asset/category/svg/clothing.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SelectServices from "./SelectServices";
import { getToken } from "../../helpers/getToken";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";


function ServiceAvailability() {
  const [isHoveredHall, setIsHoveredHall] = useState(false);
  const [isHoveredCatering, setIsHoveredCatering] = useState(false);
  const [isHoveredCamera, setIsHoveredCamera] = useState(false);
  const [isHoveredClothing, setIsHoveredClothing] = useState(false);
  const [isHoveredBarber, setIsHoveredBarber] = useState(false);
  const [responseData, setResponseData] = useState([]); // State variable to store response data
  const [subServices, setSubServices] = useState(false); // State variable to store sub-services data
  const [subServicesData, setSubServicesData] = useState([]); // State variable to store sub-services data
  const [selectedService, setSelectedService] = useState(null);
  const { user } = useSelector((state) => state.app);
  const user_id = user?.id;
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/get-services-type`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setResponseData(res.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);
  //console.log(responseData[0].name);
  

  const handleCardClick = async (id) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("service_id", id);
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/get-sub-services-type?service_id=${id}&user_id=${user_id}`,
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

  const isDataLoaded = responseData && responseData.length > 0;

  return (
    <div className="mt-10">
      {subServices ? (
        <SelectServices navigateBack={navigateBack} serviceName={selectedService} subServicesData={subServicesData} />
      ) : (
        <>
          <p className="text-xl font-medium mb-6 text-start">
            Available Services
          </p>
          <div className="flex flex-wrap gap-8 items-center justify-start">
            {isDataLoaded && (
              <>
                <div
                  onClick={() => {
                    handleCardClick(responseData[0]?.id);
                    setSelectedService(responseData[0]?.name);
                  }}
                  style={{ boxShadow: "0px 0px 10px 0px #0000001F" }}
                  className={`flex flex-col gap-2 w-[250px] h-[160px] rounded-lg items-center justify-center transition duration-200 ease-in-out transform hover:scale-105 ${
                    isHoveredHall
                      ? "bg-[#273660E5] text-white"
                      : "bg-white text-#273660"
                  }`}
                  onMouseEnter={() => setIsHoveredHall(true)}
                  onMouseLeave={() => setIsHoveredHall(false)}
                >
                  <LazyLoadImage
                    src={isHoveredHall ? hall_white : hall}
                    alt="Hall & Marquee"
                    className="w-[38px] h-[38px] transition duration-100 ease-in-out transform hover:rotate-12"
                  />
                  <p className="text-xl font-semibold transition duration-100 ease-in-out hover:text-white">
                    {responseData[0]?.name}
                  </p>
                </div>
                <div
                   onClick={() => {
                    handleCardClick(responseData[1]?.id);
                    setSelectedService(responseData[1]?.name);
                  }}
                  style={{ boxShadow: "0px 0px 10px 0px #0000001F" }}
                  className={`flex flex-col gap-2 w-[250px] h-[160px] rounded-lg items-center justify-center transition duration-200 ease-in-out transform hover:scale-105 ${
                    isHoveredCatering
                      ? "bg-[#273660E5] text-white"
                      : "bg-white text-#273660"
                  }`}
                  onMouseEnter={() => setIsHoveredCatering(true)}
                  onMouseLeave={() => setIsHoveredCatering(false)}
                >
                  <LazyLoadImage
                    src={isHoveredCatering ? catering : catering_blue}
                    alt="Catering"
                    className="w-[38px] h-[38px] transition duration-100 ease-in-out transform hover:rotate-12"
                  />
                  <p className="text-xl font-semibold transition duration-100 ease-in-out hover:text-white">
                    {responseData[1]?.name}
                  </p>
                </div>
                <div
                   onClick={() => {
                    handleCardClick(responseData[2]?.id);
                    setSelectedService(responseData[2]?.name);
                  }}
                  style={{ boxShadow: "0px 0px 10px 0px #0000001F" }}
                  className={`flex flex-col gap-2 w-[250px] h-[160px] rounded-lg items-center justify-center transition duration-200 ease-in-out transform hover:scale-105 ${
                    isHoveredCamera
                      ? "bg-[#273660E5] text-white"
                      : "bg-white text-#273660"
                  }`}
                  onMouseEnter={() => setIsHoveredCamera(true)}
                  onMouseLeave={() => setIsHoveredCamera(false)}
                >
                  <LazyLoadImage
                    src={isHoveredCamera ? camera_white : camera}
                    alt="Photography"
                    className="w-[38px] h-[38px] transition duration-100 ease-in-out transform hover:rotate-12"
                  />
                  <p className="text-xl font-semibold transition duration-100 ease-in-out hover:text-white">
                    {responseData[2]?.name}
                  </p>
                </div>
                <div
                   onClick={() => {
                    handleCardClick(responseData[3]?.id);
                    setSelectedService(responseData[3]?.name);
                  }}
                  style={{ boxShadow: "0px 0px 10px 0px #0000001F" }}
                  className={`flex flex-col gap-2 w-[250px] h-[160px] rounded-lg items-center justify-center transition duration-200 ease-in-out transform hover:scale-105 ${
                    isHoveredClothing
                      ? "bg-[#273660E5] text-white"
                      : "bg-white text-#273660"
                  }`}
                  onMouseEnter={() => setIsHoveredClothing(true)}
                  onMouseLeave={() => setIsHoveredClothing(false)}
                >
                  <LazyLoadImage
                    src={clothing}
                    alt="Clothing"
                    className="w-[38px] h-[38px] transition duration-100 ease-in-out transform hover:rotate-12"
                  />
                  <p className="text-xl font-semibold transition duration-100 ease-in-out hover:text-white">
                    {responseData[3]?.name}
                  </p>
                </div>
                <div
                   onClick={() => {
                    handleCardClick(responseData[4]?.id);
                    setSelectedService(responseData[4]?.name);
                  }}
                  style={{ boxShadow: "0px 0px 10px 0px #0000001F" }}
                  className={`flex flex-col gap-2 w-[250px] h-[160px] rounded-lg items-center justify-center transition duration-200 ease-in-out transform hover:scale-105 ${
                    isHoveredBarber
                      ? "bg-[#273660E5] text-white"
                      : "bg-white text-#273660"
                  }`}
                  onMouseEnter={() => setIsHoveredBarber(true)}
                  onMouseLeave={() => setIsHoveredBarber(false)}
                >
                  <LazyLoadImage
                    src={barber}
                    alt="Saloon"
                    className="w-[38px] h-[38px] transition duration-100 ease-in-out transform hover:rotate-12"
                  />
                  <p className="text-xl font-semibold transition duration-100 ease-in-out hover:text-white">
                    {responseData[4]?.name}
                  </p>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ServiceAvailability;
