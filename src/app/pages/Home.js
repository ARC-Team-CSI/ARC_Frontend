//home page
import React, { Fragment } from "react";
import "./styles/Home.css";
import { Typography } from "@mui/material";
import Navbar from "../layout/Navbar";
export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <div className="home-container">
        <img
          className="home-logo"
          alt="arc logo"
          src="https://res.cloudinary.com/andreahabib/image/upload/v1643912027/ARC_b6azyw.svg"
        />
        <div className="home-content">
          <Typography variant="h3">Advisement Resource Center</Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vitae mauris sed dolor auctor egestas. Nunc ultrices blandit ligula
            vitae pellentesque.
          </Typography>
        </div>
      </div>
    </Fragment>
  );
}
