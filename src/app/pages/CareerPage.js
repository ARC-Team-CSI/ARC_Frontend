import React from 'react'
import {Box, Button, Grid, Typography} from "@mui/material";
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import '../styles/CareerPage.css';
import ButtonBasic from "../components/ButtonBasic";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const CareerPage = () => {
  return (

    <Grid container className = "containerSplit" flexDirection="column">
    <ResponsiveAppBar/>
        <div className = "firstHalf">
            <Typography variant="h2" component="h1" pt={10} px={10} >
                Career
            </Typography>
            <Box width={"300px"} px={10}>
            <Typography variant="subtitle1" component="p"  display={"inline"} >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, atque deserunt, dolore impedit ipsum molestiae officia perspiciatis quasi quisquam rerum totam voluptatem! Aperiam deleniti labore magnam, maiores minus odio placeat.
            </Typography>
            </Box>

            <Grid container flexDirection="row" justifyContent="flex-end" marginY={25} justifySelf="self-end" height={0}>
                <Grid item xs={2}>
                    <Button variant="contained"  component={Link} to="/Resume" style={{maxWidth: '200px', maxHeight: '100px', minWidth: '200px', minHeight: '100px'}}> Resume </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" component={Link} to="/Degree" style={{maxWidth: '200px', maxHeight: '100px', minWidth: '200px', minHeight: '100px'}}> Career/Degree </Button>
                </Grid>
            </Grid>

            <Grid py={0} container sx={{flexDirection: {xs: "column", md: "row"}, justifyContent: {xs: "center", md: "space-around"}, alignContent: {xs: "center", md: "space-around"}}}  >
                <Grid item xs={3} mt={5}>
                    <ButtonBasic title="Internships/Job" size="small" color="primary" link="https://csi-cs-department.gitbook.io/internship-handbook/" image = "/images/CSevent.jpg"/>
                </Grid>

                <Grid item xs={3} mt={5}>
                    <ButtonBasic title="GitBook" size="small" color="primary" link="https://andreahabib.github.io/RSS_Menu/" image = "/images/Gitbook.jpg"/>
                </Grid>

                <Grid item xs={3} mt={5}>
                    <ButtonBasic title="Cs Events" size="small" color="success" image = "/images/JobIntern.jpg" link= "https://andreahabib.github.io/RSS_Menu/"/>
                </Grid>
            </Grid>

            <Footer/>
        </div>
    </Grid>

  )
}

export default CareerPage;
