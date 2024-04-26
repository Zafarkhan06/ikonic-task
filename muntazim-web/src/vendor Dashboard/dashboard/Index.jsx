import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";

const Dashboard = ({ children }) => {
  return (
    <>
      <Stack direction={"row"} >
        <Box
          sx={{
            flex: { xs: 1.75, md: 1.75 },
            background: "white",
            display: { xs: "none", lg: "block" },
            borderRight: "1px solid #C8D4DF",
            maxWidth: "35rem",
          }}
        >
          <SideBar/>
        </Box>
        <Box flex={8} sx={{background: "#F3F3F3"}}>
          <NavBar />
          <Container sx={{paddingBottom:'2%'}}>{children}</Container>
        </Box>
      </Stack>
    </>
  );
};

export default Dashboard;
