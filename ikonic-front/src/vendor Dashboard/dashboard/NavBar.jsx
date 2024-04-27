import {
  Avatar,
  Box,
  Divider,
  Menu,
  MenuItem,
  Typography,
  Popover,
  SvgIcon,
  Drawer,
  Button,
} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { signingOut } from "../../Features/Redux/userAuth";
import { useNavigate } from "react-router-dom";
import ikonic_logo from "../../asset/category/svg/ikonic-logo.png";
import { Link } from "react-router-dom";
import { Logout } from "../../services/authService";


const NavBar = () => {
  const { user } = useSelector((state) => state.app);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);



  useEffect(() => {
    const handleResize = () => {
      // Check if the drawer is open and screen size is greater than a certain breakpoint
      if (openDrawer && window.innerWidth > 1024) {
        setOpenDrawer(false); // Close the drawer
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [openDrawer]);

  
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          background: "white",
          alignItems: "center",
          minHeight: "70px",
          borderBottom: "1px solid #C8D4DF",
        }}
      >
        <Box sx={{ display: "flex", gap: "2.5rem", marginLeft: "2.5%" }}>
          <SvgIcon
            onClick={() => setOpenDrawer(true)}
            sx={{
              cursor: "pointer",
              display: { xs: "block", lg: "none" },
            }}
          >
            {" "}
            <svg
              height="20"
              fill="grey"
              style={{ cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>{" "}
          </SvgIcon>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1.25rem",
            marginRight: "2.5%",
            alignItems: "Center",
          }}
        >
          
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Avatar
              sx={{ cursor: "pointer" }}
              onClick={(e) => {
                setAnchorEl(e.currentTarget);
                setOpenMenu(true);
              }}
            />
            <Typography variant="body2" sx={{ color: "grey" }}>
              {" "}
              Welcome {user.name}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      >
        <MenuItem sx={{ width: "150px" }} onClick={() => Logout(dispatch)}>
          <Typography variant="body2"> Log Out </Typography>
        </MenuItem>
      </Menu>

      <Drawer
        sx={{ xs: "block", lg: "none" }}
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        role="presentation"
      >
        <Box sx={{ width: "50vw", padding: "3.5%", background: "white" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              pt: 1,
              
              flexDirection: "column"
            }}
          >
            <Link to="/dashboard">
              <img
                src={`${ikonic_logo}`}
                width="80%"
                onClick={() => setOpenDrawer(false)}
                className=" cursor-pointer "
                alt="logio"
              />
            </Link>
            <div className="flex flex-col mt-14 gap-2 items-start">
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
            <div className="flex gap-2 pl-3 items-center w-full">
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
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
