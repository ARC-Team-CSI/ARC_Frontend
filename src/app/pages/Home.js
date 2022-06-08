import React from 'react'
import AcademicsBtn from '../components/AcademicsBtn'
import ProfessionalBtn from '../components/ProfessionalBtn'
import './Home.css'
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import {Box} from "@material-ui/core";
import {Grid} from "@mui/material";
import logo from "../assests/logo.png"

function Home() {
  return (
    <>
        <ResponsiveAppBar/>

        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="grid"
        >
            <Grid item className="bgImage">

                <Box sx={{
                    width: "40rem",
                    height: "40vh",
                    backgroundColor: '#7FC0E6',
                    paddingBottom: 10,
                    flexDirection: "row",
                    borderRadius: "30px",
                    backgroundImage: `url(${logo})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                }}
                >
                </Box>

            </Grid>

        </Grid>

        <div><AcademicsBtn /></div>
        <div><ProfessionalBtn /></div>

    </>
  )
}

export default Home;