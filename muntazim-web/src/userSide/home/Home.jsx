import React from "react";
import { Container, Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NavBar from "../navbar/NavBar";
import FirstPart from "../components/FirstPart";
import SecondPart from "../components/SecondPart";
import ExclusiveDeals from "../components/ExclusiveDeals";
import MarriageHall from "../components/MarriageHall";
import Photographer from "../components/Photographer";
import Catering from "../components/Catering";
import Salons from "../components/Salons";
import Nikah from "../components/Nikah";
import Team from "../components/Team";
import Footer from "../footer/Footer";
function Home() {
  return (
    <>
      <Container sx={{ paddingBottom: "1%" }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <NavBar />
            <div className="mt-12">
              <FirstPart />
            </div>
            <hr className="mt-6" />
            <div className="mt-6">
              <SecondPart />
            </div>
            <hr className="mt-10" />
            <div className="mt-6">
              <ExclusiveDeals />
            </div>
            <hr className="mt-16" />
            <div className="mt-6">
              <MarriageHall />
            </div>
            <hr className="mt-16" />
            <div className="mt-6">
              <Photographer />
            </div>
            <hr className="mt-16" />
            <div className="mt-6">
              <Catering />
            </div>
            <hr className="mt-16" />
            <div className="mt-6">
              <Salons />
            </div>
            <hr className="mt-16" />
            <div className="mt-6">
              <Nikah />
            </div>
            <div className="mt-16">
              <Team />
            </div>
            <div className="mt-32">
              <Footer />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
