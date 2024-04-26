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
import talina_logo from "../../asset/category/svg/muntazim-logo.svg";
import { Link } from "react-router-dom";
import { Logout } from "../../services/authService";


const NavBar = () => {
  //const { user } = useSelector((state) => state.userAuth);
  const [open, setOpen] = useState(false);
  const [anchorElPopover, setAnchorElPopover] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClick = (event) => {
    setAnchorElPopover(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElPopover(null);
  };

  // const handleLogOut = () => {
  //   sessionStorage.removeItem("token");
  //   // dispatch(signingOut());
  //   setOpenMenu(false);
  //   setAnchorEl(null);
  //   navigate("/");
  // };

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

  const styles = {
    selectedTab: {
      fill: "white", // Change the color to your desired color
    },
  };

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
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="grey"
              height="25"
              className="cursor-pointer"
              onClick={handleClick}
              width="25"
            >
              <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
            </svg>
          </div>
          <Divider
            sx={{ height: "35px", background: "#718796" }}
            orientation="vertical"
          />
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
              Welcome Zafar Khan
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
      <Popover
        open={Boolean(anchorElPopover)}
        anchorEl={anchorElPopover}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Typography variant="body2" sx={{ p: 2 }}>
          There are no notifications right now
        </Typography>
      </Popover>

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
              marginLeft: "4%",
            }}
          >
            <Link to="/dashboard">
              <img
                src={`${talina_logo}`}
                width="57%"
                onClick={() => setOpenDrawer(false)}
                className=" cursor-pointer "
                alt="logio"
              />
            </Link>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
