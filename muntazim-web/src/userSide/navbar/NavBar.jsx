import React from "react";
import logo from "../../asset/category/svg/muntazim-logo.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center mt-3">
        <div>
          <LazyLoadImage src={logo} alt="muntazim logo" className="h-14"/>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-lg text-[#000000] cursor-pointer font-normal hover:text-[#273660] hover:font-medium">Home</p>
          <p className="text-lg text-[#000000] cursor-pointer font-normal hover:text-[#273660] hover:font-medium">Services</p>
          <p className="text-lg text-[#000000] cursor-pointer font-normal hover:text-[#273660] hover:font-medium">Blog</p>
          <p className="text-lg text-[#000000] cursor-pointer font-normal hover:text-[#273660] hover:font-medium">About us</p>
          <p className="text-lg text-[#000000] cursor-pointer font-normal hover:text-[#273660] hover:font-medium" onClick={()=> navigate("/vendor-login")}>Become a vendor</p>
        </div>
        <div className="flex gap-8 items-center">
          <Button disableElevation variant="contained" sx={{ fontWeight: 300,backgroundColor: "#273660", textTransform: "none",borderRadius: "4px", '&:hover': {backgroundColor: "#273660"} }}>Get a Complete Package</Button>
          <Button variant="text" sx={{color: "#273660",fontWeight: 500}} onClick={()=>navigate("/login")}>LOG IN</Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
