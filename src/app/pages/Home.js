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
                    width: "50rem",
                    height: "25rem",
                    backgroundColor: '#7FC0E6',
                    filter: "drop-shadow(30px 10px 50px #FFF)",
                    marginBottom: 25,
                    flexDirection: "row",
                    borderRadius: "30px",
                    backgroundImage: `url(${logo})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
                >
                    <div className="Header">
                    <h1> Welcome to the ARC Project
                        <span>Click Links Below</span>
                     </h1>
                    </div>
                </Box>

            </Grid>

        </Grid>

        <div><AcademicsBtn /></div>
        <div><ProfessionalBtn /></div>

    </>
  )
}

export default Home;