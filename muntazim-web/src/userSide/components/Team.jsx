import React from "react";
import catering from "../../asset/category/images/catering.png";
import { Button } from "@mui/material";
const Team = () => {
  return (
    <div className="flex mb-10 justify-between items-center ">
      <div className=" flex flex-col gap-5 items-start">
        <p className="text-4xl text-start font-bold">
          Find the Best TEAM <br />
          to arrange your wedding
        </p>
        <Button variant="contained" sx={{color: "white", backgroundColor: "#273660", textTransform: "capitalize"}}>Get Started </Button>
      </div>
      <div>
        <div className="flex">
          <div className="relative">
            <img
              className="w-[230px] h-[250px] object-center border-8 rounded-xl mr-20"
              src={catering}
              alt="Team Member 1"
            />
            <img
              className="w-[230px] h-[250px] object-center border-8 rounded-xl absolute top-28 left-[190px] z-10"
              src={catering}
              alt="Team Member 3"
            />
          </div>
          <img
            className="w-[230px] h-[250px] object-center border-8 rounded-xl ml-16"
            src={catering}
            alt="Team Member 2"
          />
        </div>
        <hr className="mt-5"/>
      </div>
    </div>
  );
};

export default Team;
