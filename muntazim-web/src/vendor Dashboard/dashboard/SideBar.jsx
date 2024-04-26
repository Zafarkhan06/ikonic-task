import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import muntazim_logo from "../../asset/category/svg/muntazim-logo.svg";
import { useLocation, Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box container sx={{ height: "100vh", background: "white" }}>
        <div className=" flex justify-center mt-2">
          <LazyLoadImage width="60%" src={muntazim_logo} alt="muntazim logo" />
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
            onClick={() => navigate("/dashboard/booking")}
            sx={{
              borderLeft: window.location.href.includes("/dashboard/booking")
                ? "7px solid #EBAB00"
                : "7px solid white",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              cursor: "pointer",
              padding: "5px",
            }}
          >
            <div className="flex gap-3 pl-3 items-center w-full">
              <div className=" flex justify-center">
                {window.location.href.includes("/dashboard/booking") ? (
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
                      d="M13 4.50488H10.5V7.00488H13V4.50488ZM14.5 4.50488V7.00488H16.5V5.00488C16.5 4.72874 16.2761 4.50488 16 4.50488H14.5ZM13 8.50488H10.5L10.5 11.0049H13L13 8.50488ZM14.5 11.0049L14.5 8.50488H16.5V11.0049H14.5ZM13 12.5049H10.5V15.5049H13V12.5049ZM14.5 15.5049V12.5049H16.5V15.0049C16.5 15.281 16.2761 15.5049 16 15.5049H14.5ZM4 4.50488H9V7.00488H3.5V5.00488C3.5 4.72874 3.72386 4.50488 4 4.50488ZM3.5 8.50488H9L9 11.0049H3.5V8.50488ZM3.5 12.5049H9V15.5049H4C3.72386 15.5049 3.5 15.281 3.5 15.0049V12.5049ZM4 3.00488C2.89543 3.00488 2 3.90031 2 5.00488V15.0049C2 16.1095 2.89543 17.0049 4 17.0049H16C17.1046 17.0049 18 16.1095 18 15.0049V5.00488C18 3.90031 17.1046 3.00488 16 3.00488H4Z"
                      fill="#133774"
                    />
                  </svg>
                ) : (
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
                      d="M13 4.5H10.5V7H13V4.5ZM14.5 4.5V7H16.5V5C16.5 4.72386 16.2761 4.5 16 4.5H14.5ZM13 8.5H10.5L10.5 11H13L13 8.5ZM14.5 11L14.5 8.5H16.5V11H14.5ZM13 12.5H10.5V15.5H13V12.5ZM14.5 15.5V12.5H16.5V15C16.5 15.2761 16.2761 15.5 16 15.5H14.5ZM4 4.5H9V7H3.5V5C3.5 4.72386 3.72386 4.5 4 4.5ZM3.5 8.5H9L9 11H3.5V8.5ZM3.5 12.5H9V15.5H4C3.72386 15.5 3.5 15.2761 3.5 15V12.5ZM4 3C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V5C18 3.89543 17.1046 3 16 3H4Z"
                      fill="#676879"
                    />
                  </svg>
                )}
              </div>
              <Typography
                sx={{
                  color: window.location.href.includes("/dashboard/booking")
                    ? "#133774"
                    : "#323338 ",
                  fontSize: "18px",
                }}
                variant="body1"
              >
                Bookings
              </Typography>
            </div>
          </Box>

          <Box
            onClick={() => navigate("/dashboard/addservice")}
            sx={{
              borderLeft: window.location.href.includes("/dashboard/addservice")
                ? "7px solid #EBAB00"
                : "7px solid white",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              cursor: "pointer",
              padding: "5px",
            }}
          >
            <div className="flex gap-3 pl-3 items-center w-full">
              <div className=" flex justify-center">
                {window.location.href.includes("/dashboard/addservice") ? (
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
                      d="M16 4.50488H7.5L7.5 15.5049H16C16.2761 15.5049 16.5 15.281 16.5 15.0049V5.00488C16.5 4.72874 16.2761 4.50488 16 4.50488ZM4 4.50488H6L6 15.5049H4C3.72386 15.5049 3.5 15.281 3.5 15.0049V5.00488C3.5 4.72874 3.72386 4.50488 4 4.50488ZM4 3.00488C2.89543 3.00488 2 3.90031 2 5.00488V15.0049C2 16.1095 2.89543 17.0049 4 17.0049H16C17.1046 17.0049 18 16.1095 18 15.0049V5.00488C18 3.90031 17.1046 3.00488 16 3.00488H4ZM15 9.00488V7.00488L9 7.00488V9.00488H15Z"
                      fill="#133774"
                    />
                  </svg>
                ) : (
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
                      d="M16 4.50488H7.5L7.5 15.5049H16C16.2761 15.5049 16.5 15.281 16.5 15.0049V5.00488C16.5 4.72874 16.2761 4.50488 16 4.50488ZM4 4.50488H6L6 15.5049H4C3.72386 15.5049 3.5 15.281 3.5 15.0049V5.00488C3.5 4.72874 3.72386 4.50488 4 4.50488ZM4 3.00488C2.89543 3.00488 2 3.90031 2 5.00488V15.0049C2 16.1095 2.89543 17.0049 4 17.0049H16C17.1046 17.0049 18 16.1095 18 15.0049V5.00488C18 3.90031 17.1046 3.00488 16 3.00488H4ZM15 9.00488V7.00488L9 7.00488V9.00488H15Z"
                      fill="#676879"
                    />
                  </svg>
                )}
              </div>
              <Typography
                sx={{
                  color: window.location.href.includes("/dashboard/addservice")
                    ? "#133774"
                    : "#323338 ",
                  fontSize: "18px",
                }}
                variant="body1"
              >
                Services
              </Typography>
            </div>
          </Box>

          <Box
            onClick={() => navigate("/dashboard/team")}
            sx={{
              borderLeft: window.location.href.includes("/dashboard/team")
                ? "7px solid #EBAB00"
                : "7px solid white",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              cursor: "pointer",
              padding: "5px",
            }}
          >
            <div className="flex gap-3 pl-3 items-center w-full">
              <div className=" flex justify-center">
                {window.location.href.includes("/dashboard/team") ? (
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
                      d="M9.81628 2.00488C8.63228 2.00488 7.49677 2.47523 6.65955 3.31244C5.82234 4.14966 5.352 5.28517 5.352 6.46917C5.352 7.65317 5.82234 8.78868 6.65955 9.6259C7.49677 10.4631 8.63228 10.9335 9.81628 10.9335C11.0003 10.9335 12.1358 10.4631 12.973 9.6259C13.8102 8.78868 14.2806 7.65317 14.2806 6.46917C14.2806 5.28517 13.8102 4.14966 12.973 3.31244C12.1358 2.47523 11.0003 2.00488 9.81628 2.00488ZM7.72021 4.3731C8.27613 3.81719 9.0301 3.50488 9.81628 3.50488C10.6025 3.50488 11.3564 3.81719 11.9123 4.3731C12.4683 4.92901 12.7806 5.68299 12.7806 6.46917C12.7806 7.25535 12.4683 8.00932 11.9123 8.56523C11.3564 9.12115 10.6025 9.43345 9.81628 9.43345C9.0301 9.43345 8.27613 9.12115 7.72021 8.56523C7.1643 8.00932 6.852 7.25535 6.852 6.46917C6.852 5.68299 7.1643 4.92901 7.72021 4.3731ZM9.81629 11.725C8.08836 11.725 6.40482 12.2723 5.00718 13.2884C3.60954 14.3044 2.56962 15.737 2.03658 17.3807C1.96255 17.609 2.00224 17.8589 2.14337 18.0531C2.28449 18.2472 2.51 18.362 2.75001 18.362H16.8826C17.1226 18.362 17.3481 18.2472 17.4892 18.0531C17.6303 17.8589 17.67 17.609 17.596 17.3807C17.063 15.737 16.023 14.3044 14.6254 13.2884C13.2278 12.2723 11.5442 11.725 9.81629 11.725ZM5.8892 14.5016C7.03051 13.6719 8.40527 13.225 9.81629 13.225C11.2273 13.225 12.6021 13.6719 13.7434 14.5016C14.5964 15.1218 15.2863 15.9319 15.7621 16.862H3.87051C4.34632 15.9319 5.03617 15.1218 5.8892 14.5016Z"
                      fill="#133774"
                    />
                  </svg>
                ) : (
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
                      d="M9.81628 2.00488C8.63228 2.00488 7.49677 2.47523 6.65955 3.31244C5.82234 4.14966 5.352 5.28517 5.352 6.46917C5.352 7.65317 5.82234 8.78868 6.65955 9.6259C7.49677 10.4631 8.63228 10.9335 9.81628 10.9335C11.0003 10.9335 12.1358 10.4631 12.973 9.6259C13.8102 8.78868 14.2806 7.65317 14.2806 6.46917C14.2806 5.28517 13.8102 4.14966 12.973 3.31244C12.1358 2.47523 11.0003 2.00488 9.81628 2.00488ZM7.72021 4.3731C8.27613 3.81719 9.0301 3.50488 9.81628 3.50488C10.6025 3.50488 11.3564 3.81719 11.9123 4.3731C12.4683 4.92901 12.7806 5.68299 12.7806 6.46917C12.7806 7.25535 12.4683 8.00932 11.9123 8.56523C11.3564 9.12115 10.6025 9.43345 9.81628 9.43345C9.0301 9.43345 8.27613 9.12115 7.72021 8.56523C7.1643 8.00932 6.852 7.25535 6.852 6.46917C6.852 5.68299 7.1643 4.92901 7.72021 4.3731ZM9.81629 11.725C8.08836 11.725 6.40482 12.2723 5.00718 13.2884C3.60954 14.3044 2.56962 15.737 2.03658 17.3807C1.96255 17.609 2.00224 17.8589 2.14337 18.0531C2.28449 18.2472 2.51 18.362 2.75001 18.362H16.8826C17.1226 18.362 17.3481 18.2472 17.4892 18.0531C17.6303 17.8589 17.67 17.609 17.596 17.3807C17.063 15.737 16.023 14.3044 14.6254 13.2884C13.2278 12.2723 11.5442 11.725 9.81629 11.725ZM5.8892 14.5016C7.03051 13.6719 8.40527 13.225 9.81629 13.225C11.2273 13.225 12.6021 13.6719 13.7434 14.5016C14.5964 15.1218 15.2863 15.9319 15.7621 16.862H3.87051C4.34632 15.9319 5.03617 15.1218 5.8892 14.5016Z"
                      fill="#676879"
                    />
                  </svg>
                )}
              </div>
              <Typography
                sx={{
                  color: window.location.href.includes("/dashboard/team")
                    ? "#133774"
                    : "#323338 ",
                  fontSize: "18px",
                }}
                variant="body1"
              >
                Team
              </Typography>
            </div>
          </Box>

          <Box
            onClick={() => navigate("/dashboard/team")}
            sx={{
              borderLeft: window.location.href.includes("/dashboard/calender")
                ? "7px solid #EBAB00"
                : "7px solid white",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              cursor: "pointer",
              padding: "5px",
            }}
          >
            <div className="flex gap-3 pl-3 items-center w-full">
              <div className=" flex justify-center">
                {window.location.href.includes("/dashboard/calender") ? (
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
                      d="M16 4.50488H7.5L7.5 15.5049H16C16.2761 15.5049 16.5 15.281 16.5 15.0049V5.00488C16.5 4.72874 16.2761 4.50488 16 4.50488ZM4 4.50488H6L6 15.5049H4C3.72386 15.5049 3.5 15.281 3.5 15.0049V5.00488C3.5 4.72874 3.72386 4.50488 4 4.50488ZM4 3.00488C2.89543 3.00488 2 3.90031 2 5.00488V15.0049C2 16.1095 2.89543 17.0049 4 17.0049H16C17.1046 17.0049 18 16.1095 18 15.0049V5.00488C18 3.90031 17.1046 3.00488 16 3.00488H4ZM15 9.00488V7.00488L9 7.00488V9.00488H15Z"
                      fill="#133774"
                    />
                  </svg>
                ) : (
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
                      d="M6.85849 2.7793C6.85849 2.36508 6.52271 2.0293 6.10849 2.0293C5.69428 2.0293 5.35849 2.36508 5.35849 2.7793V5.00259V7.22596C5.35849 7.64017 5.69428 7.97596 6.10849 7.97596C6.52271 7.97596 6.85849 7.64017 6.85849 7.22596V5.75259H11.6668C12.081 5.75259 12.4168 5.4168 12.4168 5.00259C12.4168 4.58837 12.081 4.25259 11.6668 4.25259H6.85849V2.7793ZM2.56871 4.79786C2.91783 4.44873 3.39136 4.25259 3.8851 4.25259C4.29931 4.25259 4.6351 4.58837 4.6351 5.00259C4.6351 5.4168 4.29931 5.75259 3.8851 5.75259C3.78918 5.75259 3.69719 5.79069 3.62937 5.85852C3.56154 5.92634 3.52344 6.01833 3.52344 6.11425V8.69923H16.475V6.11425C16.475 6.01833 16.4369 5.92634 16.3691 5.85852C16.3013 5.79069 16.2093 5.75259 16.1134 5.75259H14.6401V7.22596C14.6401 7.64017 14.3043 7.97596 13.8901 7.97596C13.4759 7.97596 13.1401 7.64017 13.1401 7.22596V5.01203L13.1401 5.00259L13.1401 4.99315V2.7793C13.1401 2.36508 13.4759 2.0293 13.8901 2.0293C14.3043 2.0293 14.6401 2.36508 14.6401 2.7793V4.25259H16.1134C16.6071 4.25259 17.0807 4.44873 17.4298 4.79786C17.7789 5.14699 17.975 5.62051 17.975 6.11425V9.44923V16.1192C17.975 16.613 17.7789 17.0865 17.4298 17.4356C17.0807 17.7848 16.6071 17.9809 16.1134 17.9809H3.8851C3.39136 17.9809 2.91783 17.7848 2.56871 17.4356C2.21958 17.0865 2.02344 16.613 2.02344 16.1192V9.44923V6.11425C2.02344 5.62051 2.21958 5.14699 2.56871 4.79786ZM3.52344 16.1192V10.1992H16.475V16.1192C16.475 16.2152 16.4369 16.3072 16.3691 16.375C16.3013 16.4428 16.2093 16.4809 16.1134 16.4809H3.8851C3.78918 16.4809 3.69719 16.4428 3.62937 16.375C3.56154 16.3072 3.52344 16.2152 3.52344 16.1192Z"
                      fill="#676879"
                    />
                  </svg>
                )}
              </div>
              <Typography
                sx={{
                  color: window.location.href.includes("/dashboard/calender")
                    ? "#133774"
                    : "#323338 ",
                  fontSize: "18px",
                }}
                variant="body1"
              >
                Calender
              </Typography>
            </div>
          </Box>

          <Box
            onClick={() => navigate("/dashboard/availability")}
            sx={{
              borderLeft: window.location.href.includes("/dashboard/availability")
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
                {window.location.href.includes("/dashboard/availability") ? (
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
                      d="M16 4.5H7.5L7.5 15.5H16C16.2761 15.5 16.5 15.2761 16.5 15V5C16.5 4.72386 16.2761 4.5 16 4.5ZM4 4.5H6L6 15.5H4C3.72386 15.5 3.5 15.2761 3.5 15V5C3.5 4.72386 3.72386 4.5 4 4.5ZM4 3C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V5C18 3.89543 17.1046 3 16 3H4ZM15 9V7L9 7V9H15Z"
                      fill="#273660"
                    />
                  </svg>
                ) : (
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
                      d="M16 4.5H7.5L7.5 15.5H16C16.2761 15.5 16.5 15.2761 16.5 15V5C16.5 4.72386 16.2761 4.5 16 4.5ZM4 4.5H6L6 15.5H4C3.72386 15.5 3.5 15.2761 3.5 15V5C3.5 4.72386 3.72386 4.5 4 4.5ZM4 3C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V5C18 3.89543 17.1046 3 16 3H4ZM15 9V7L9 7V9H15Z"
                      fill="#676879"
                    />
                  </svg>
                )}
              </div>
              <Typography
                sx={{
                  color: window.location.href.includes("/dashboard/availability")
                    ? "#133774"
                    : "#323338 ",
                  fontSize: "18px",
                }}
                variant="body1"
              >
                Available Services
              </Typography>
            </div>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default SideBar;
