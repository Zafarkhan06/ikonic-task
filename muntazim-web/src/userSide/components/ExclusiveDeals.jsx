import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import catering from "../../asset/category/images/catering.png";
import IconButton from "@mui/material/IconButton";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Button } from "@mui/material";

const ExclusiveCard = ({ title, backgroundImage,description}) => {
  return (
    <>
      <div className=" z-10">
        <div className="border border-[#EBEBEB] flex flex-col items-center rounded-[8px] p-4 transition duration-300 hover:bg-yellow-500">
          <img className="h-[150px] " src={backgroundImage} alt="catering" />
          <p className="text-lg font-semibold mt-3">{title}</p>
          <p className="text-xs font-normal text-[#6C6C6C] line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

const ExclusiveDeals = () => {
  const [selectedCity, setSelectedCity] = useState("Lahore");

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    dots: false,
  };
  const cityNames = ["Lahore", "Karachi", "Islamabad", "Faisalabad", "Multan"];

  const vendors = {
    Lahore: [
      { title: "Insha Films", backgroundImage: catering , description: "Explore and tour top-rated reception venues" },
      { title: "Bombino", backgroundImage: catering , description: "Explore and tour top-rated reception venues"},
      { title: "Al-Jannat", backgroundImage: catering , description: "Explore and tour top-rated reception venues"},
      { title: "kesariya Hall", backgroundImage: catering , description: "Explore and tour top-rated reception venues"},
      { title: "Good Hall", backgroundImage: catering , description: "Explore and tour top-rated reception venues"},
    ],
    Karachi: [
      { title: "Insha Films", backgroundImage: catering , description: "Explore and tour top-rated reception venues" },
      { title: "Bombino", backgroundImage: catering , description: "Explore and tour top-rated reception venues"},
      { title: "Al-Jannat", backgroundImage: catering , description: "Explore and tour top-rated reception venues"},
      { title: "kesariya Hall", backgroundImage: catering , description: "Explore and tour top-rated reception venues"},
      { title: "Good Hall", backgroundImage: catering , description: "Explore and tour top-rated reception venues"},
    ],
    Pewhawar: [
      { title: "Insha Films", backgroundImage: catering , description: "Explore and tour top-rated reception venues" },
      { title: "Bombino", backgroundImage: catering , description: "Explore and tour top-rated reception venues"},
      { title: "Al-Jannat", backgroundImage: catering , description: "Explore and tour top-rated reception venues"},
      { title: "kesariya Hall", backgroundImage: catering , description: "Explore and tour top-rated reception venues"},
      { title: "Good Hall", backgroundImage: catering , description: "Explore and tour top-rated reception venues"},
    ],
    Islamabad: [
      { title: "Insha Films", backgroundImage: catering , description: "Explore and tour top-rated reception venues" },
      { title: "Bombino", backgroundImage: catering , description: "Explore and tour top-rated reception venues"},
      { title: "Al-Jannat", backgroundImage: catering , description: "Explore and tour top-rated reception venues"},
      { title: "kesariya Hall", backgroundImage: catering , description: "Explore and tour top-rated reception venues"},
      { title: "Good Hall", backgroundImage: catering , description: "Explore and tour top-rated reception venues"},
    ],
  };
  const slider = React.useRef(null);
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-3xl text-[#000000] text-start mb-2">
            Muntazim Exclusive Deals & Discounts
          </p>
          <div className="flex justify-start items-center gap-3">
          {Object.keys(vendors).map((city) => (
              <p
                key={city}
                className={`font-normal text-base text-[#000000] text-start cursor-pointer ${
                  selectedCity === city && "underline"
                }`}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </p>
            ))}
          </div>
        </div>
        <div>
          <Button
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              borderRadius: "4px",
              color: "#000000",
              fontSize: "19px",
              border: "1px solid #EBEBEB",
              px: 5,
              py: 1,
            }}
          >
            Show all
          </Button>
        </div>
      </div>
      <div className="flex -ml-2 -mr-2 mt-6 justify-center items-center">
        <div className="slider-container w-full">
          <Slider ref={slider} {...settings}>
          {vendors[selectedCity].map((vendor, index) => (
              <div key={index}>
                <ExclusiveCard
                  title={vendor.title}
                  backgroundImage={vendor.backgroundImage}
                  description={vendor.description}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex  z-[100] justify-end -mt-16 mr-1">
        <IconButton onClick={() => slider?.current?.slickPrev()}>
          <ArrowCircleLeftIcon sx={{ color: "#273660" }} />
        </IconButton>
        <IconButton onClick={() => slider?.current?.slickNext()}>
          <ArrowCircleRightIcon sx={{ color: "#273660" }} />
        </IconButton>
      </div>
    </>
  );
};

export default ExclusiveDeals;
