import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ikonic_logo from "../../asset/category/svg/ikonic-logo.png";
import { useLocation, Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box container sx={{ height: "100vh", background: "white" }}>
        <div className=" flex justify-center mt-2">
          <LazyLoadImage width="60%" src={ikonic_logo} alt="ikonic logo" />
        </div>
        <div className="flex flex-col mt-14 gap-5 items-start">
          <Box
            onClick={() => navigate("/dashboard/main")}
            sx={{
              borderLeft: window.location.href.includes("/dashboard/main")
                ? "7px solid #EBAB00"
                : "7px solid white",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: "5px",
              cursor: "pointer",
            }}
          >
            <div className="flex gap-3 pl-3 items-center w-full">
              <div className=" flex justify-center">
                {window.location.href.includes("/dashboard/main") ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 3.50488H16C16.2761 3.50488 16.5 3.72874 16.5 4.00488V16.0049C16.5 16.281 16.2761 16.5049 16 16.5049H4C3.72386 16.5049 3.5 16.281 3.5 16.0049V4.00488C3.5 3.72874 3.72386 3.50488 4 3.50488ZM2 4.00488C2 2.90031 2.89543 2.00488 4 2.00488H16C17.1046 2.00488 18 2.90031 18 4.00488V16.0049C18 17.1095 17.1046 18.0049 16 18.0049H4C2.89543 18.0049 2 17.1095 2 16.0049V4.00488ZM5.5 14.2549C5.5 14.6691 5.83579 15.0049 6.25 15.0049C6.66421 15.0049 7 14.6691 7 14.2549V10.7549C7 10.3407 6.66421 10.0049 6.25 10.0049C5.83579 10.0049 5.5 10.3407 5.5 10.7549L5.5 14.2549ZM10.25 15.0049C9.83579 15.0049 9.5 14.6691 9.5 14.2549L9.5 7.75488C9.5 7.34067 9.83579 7.00488 10.25 7.00488C10.6642 7.00488 11 7.34067 11 7.75488V14.2549C11 14.6691 10.6642 15.0049 10.25 15.0049ZM13.5 14.2549C13.5 14.6691 13.8358 15.0049 14.25 15.0049C14.6642 15.0049 15 14.6691 15 14.2549V5.75488C15 5.34067 14.6642 5.00488 14.25 5.00488C13.8358 5.00488 13.5 5.34067 13.5 5.75488V14.2549Z"
                      fill="#133774"
                    />
                  </svg>
                ) : (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 3.50488H16C16.2761 3.50488 16.5 3.72874 16.5 4.00488V16.0049C16.5 16.281 16.2761 16.5049 16 16.5049H4C3.72386 16.5049 3.5 16.281 3.5 16.0049V4.00488C3.5 3.72874 3.72386 3.50488 4 3.50488ZM2 4.00488C2 2.90031 2.89543 2.00488 4 2.00488H16C17.1046 2.00488 18 2.90031 18 4.00488V16.0049C18 17.1095 17.1046 18.0049 16 18.0049H4C2.89543 18.0049 2 17.1095 2 16.0049V4.00488ZM5.5 14.2549C5.5 14.6691 5.83579 15.0049 6.25 15.0049C6.66421 15.0049 7 14.6691 7 14.2549V10.7549C7 10.3407 6.66421 10.0049 6.25 10.0049C5.83579 10.0049 5.5 10.3407 5.5 10.7549L5.5 14.2549ZM10.25 15.0049C9.83579 15.0049 9.5 14.6691 9.5 14.2549L9.5 7.75488C9.5 7.34067 9.83579 7.00488 10.25 7.00488C10.6642 7.00488 11 7.34067 11 7.75488V14.2549C11 14.6691 10.6642 15.0049 10.25 15.0049ZM13.5 14.2549C13.5 14.6691 13.8358 15.0049 14.25 15.0049C14.6642 15.0049 15 14.6691 15 14.2549V5.75488C15 5.34067 14.6642 5.00488 14.25 5.00488C13.8358 5.00488 13.5 5.34067 13.5 5.75488V14.2549Z"
                      fill="#676879"
                    />
                  </svg>
                )}
              </div>
              <Typography
                sx={{
                  color: window.location.href.includes("/dashboard/main")
                    ? "#133774"
                    : "#323338 ",
                  fontSize: "18px",
                }}
                variant="body1"
              >
                Dashboard
              </Typography>
            </div>
          </Box>

          <Box
            onClick={() => navigate("/dashboard/enter-review")}
            sx={{
              borderLeft: window.location.href.includes("/dashboard/enter-review")
                ? "7px solid #EBAB00"
                : "7px solid white",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: "5px",
              cursor: "pointer",
            }}
          >
            <div className="flex gap-3 pl-3 items-center w-full">
              <div className=" flex justify-center">
                {window.location.href.includes("/dashboard/enter-review") ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 3.50488H16C16.2761 3.50488 16.5 3.72874 16.5 4.00488V16.0049C16.5 16.281 16.2761 16.5049 16 16.5049H4C3.72386 16.5049 3.5 16.281 3.5 16.0049V4.00488C3.5 3.72874 3.72386 3.50488 4 3.50488ZM2 4.00488C2 2.90031 2.89543 2.00488 4 2.00488H16C17.1046 2.00488 18 2.90031 18 4.00488V16.0049C18 17.1095 17.1046 18.0049 16 18.0049H4C2.89543 18.0049 2 17.1095 2 16.0049V4.00488ZM5.5 14.2549C5.5 14.6691 5.83579 15.0049 6.25 15.0049C6.66421 15.0049 7 14.6691 7 14.2549V10.7549C7 10.3407 6.66421 10.0049 6.25 10.0049C5.83579 10.0049 5.5 10.3407 5.5 10.7549L5.5 14.2549ZM10.25 15.0049C9.83579 15.0049 9.5 14.6691 9.5 14.2549L9.5 7.75488C9.5 7.34067 9.83579 7.00488 10.25 7.00488C10.6642 7.00488 11 7.34067 11 7.75488V14.2549C11 14.6691 10.6642 15.0049 10.25 15.0049ZM13.5 14.2549C13.5 14.6691 13.8358 15.0049 14.25 15.0049C14.6642 15.0049 15 14.6691 15 14.2549V5.75488C15 5.34067 14.6642 5.00488 14.25 5.00488C13.8358 5.00488 13.5 5.34067 13.5 5.75488V14.2549Z"
                      fill="#133774"
                    />
                  </svg>
                ) : (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 3.50488H16C16.2761 3.50488 16.5 3.72874 16.5 4.00488V16.0049C16.5 16.281 16.2761 16.5049 16 16.5049H4C3.72386 16.5049 3.5 16.281 3.5 16.0049V4.00488C3.5 3.72874 3.72386 3.50488 4 3.50488ZM2 4.00488C2 2.90031 2.89543 2.00488 4 2.00488H16C17.1046 2.00488 18 2.90031 18 4.00488V16.0049C18 17.1095 17.1046 18.0049 16 18.0049H4C2.89543 18.0049 2 17.1095 2 16.0049V4.00488ZM5.5 14.2549C5.5 14.6691 5.83579 15.0049 6.25 15.0049C6.66421 15.0049 7 14.6691 7 14.2549V10.7549C7 10.3407 6.66421 10.0049 6.25 10.0049C5.83579 10.0049 5.5 10.3407 5.5 10.7549L5.5 14.2549ZM10.25 15.0049C9.83579 15.0049 9.5 14.6691 9.5 14.2549L9.5 7.75488C9.5 7.34067 9.83579 7.00488 10.25 7.00488C10.6642 7.00488 11 7.34067 11 7.75488V14.2549C11 14.6691 10.6642 15.0049 10.25 15.0049ZM13.5 14.2549C13.5 14.6691 13.8358 15.0049 14.25 15.0049C14.6642 15.0049 15 14.6691 15 14.2549V5.75488C15 5.34067 14.6642 5.00488 14.25 5.00488C13.8358 5.00488 13.5 5.34067 13.5 5.75488V14.2549Z"
                      fill="#676879"
                    />
                  </svg>
                )}
              </div>
              <Typography
                sx={{
                  color: window.location.href.includes("/dashboard/enter-review")
                    ? "#133774"
                    : "#323338 ",
                  fontSize: "18px",
                }}
                variant="body1"
              >
                Enter Review
              </Typography>
            </div>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default SideBar;
