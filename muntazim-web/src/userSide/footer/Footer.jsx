import React from "react";
import muntazim_logo from "../../asset/category/svg/muntazim-logo.svg";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function Footer() {
  return (
    <footer>
      <div className="flex justify-between items-start">
        <div>
          <img src={muntazim_logo} alt="muntazim logo" />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-xl font-semibold mb-3"> Pages</p>
            <p className="text-sm font-normal"> Home</p>
            <p className="text-sm font-normal"> Pricing</p>
            <p className="text-sm font-normal"> Blog</p>
            <p className="text-sm font-normal"> Demo</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-xl font-semibold mb-3"> Service</p>
            <p className="text-sm font-normal"> Venues</p>
            <p className="text-sm font-normal"> Wedding Catering</p>
            <p className="text-sm font-normal"> Wedding Attire</p>
            <p className="text-sm font-normal"> Wedding Planners</p>
            <p className="text-sm font-normal"> Wedding Cakes</p>
            <p className="text-sm font-normal"> Wedding DJs</p>
            <p className="text-sm font-normal"> Wedding Videographers</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-xl font-semibold mb-3"> Contact</p>
            <div className="flex items-center gap-2">
                    <PhoneIcon />
                    <p>+1234567890</p> {/* Replace with your phone number */}
                </div>
                <div className="flex items-center gap-2">
                    <EmailIcon />
                    <p>example@example.com</p> {/* Replace with your email */}
                </div>
                <div className="flex items-center gap-2">
                    <LocationOnIcon />
                    <p>123 Street, City, Country</p> {/* Replace with your address */}
                </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-xl font-semibold mb-3"> Contact</p>
            <div className="flex items-center gap-2">
                    <PhoneIcon />
                    <p>+1234567890</p> {/* Replace with your phone number */}
                </div>
                <div className="flex items-center gap-2">
                    <EmailIcon />
                    <p>example@example.com</p> {/* Replace with your email */}
                </div>
                <div className="flex items-center gap-2">
                    <LocationOnIcon />
                    <p>123 Street, City, Country</p> {/* Replace with your address */}
                </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
