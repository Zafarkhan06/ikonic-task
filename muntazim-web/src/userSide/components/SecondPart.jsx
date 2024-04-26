import React from "react";
import { Button } from "@mui/material";
const VendorCard = ({ title, backgroundImage }) => {
  return (
    <div className={`${backgroundImage} cursor-pointer w-1/3 h-[190px] bg-[#00000052] rounded-[8px] flex items-end justify-center pb-10`}>
      <p className="text-white font-semibold text-lg">{title}</p>
    </div>
  );
};

function SecondPart() {
    const vendorsFirst = [
        { title: "Wedding Venues", backgroundImage: "weeding-venue" },{ title: "Photographers", backgroundImage: "photographers" },
        { title: "Catering", backgroundImage: "catering" },
      ];
      const vendorsSecond = [
        { title: "Beauty Salons", backgroundImage: "beauty" },{ title: "Nikah Khuwan", backgroundImage: "nikah" },
        { title: "Clothing & Shoes", backgroundImage: "clothing" },
      ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-3xl text-[#000000] text-start mb-2">
            Find every vendor you need
          </p>
          <p className="font-normal text-base text-[#000000] text-start">
            Connect with seasoned wedding pros to help bring your day to life.
          </p>
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
      <div className="mt-6 flex gap-5">
      {vendorsFirst.map((vendor, index) => (
          <VendorCard key={index} title={vendor.title} backgroundImage={vendor.backgroundImage} />
        ))}
      </div>
      <div className="mt-12 flex gap-5">
      {vendorsSecond.map((vendor, index) => (
          <VendorCard key={index} title={vendor.title} backgroundImage={vendor.backgroundImage} />
        ))}
      </div>
    </div>
  );
}

export default SecondPart;
