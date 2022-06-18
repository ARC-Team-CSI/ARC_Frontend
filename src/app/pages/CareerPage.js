import React from 'react'
import {Box, Button, Grid, Typography} from "@mui/material";
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import '../styles/CareerPage.css';
import ButtonBasic from "../components/ButtonBasic";
import ButtonRouter from "../components/ButtonRouter";
import Footer from "../components/Footer";


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

            <Grid container flexDirection="row" justifyContent="flex-end" marginY={25} justifySelf="self-end">
                <Grid item xs={2}>
                    <Button variant="contained" style={{maxWidth: '200px', maxHeight: '100px', minWidth: '200px', minHeight: '100px'}}> Resume </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained"  style={{maxWidth: '200px', maxHeight: '100px', minWidth: '200px', minHeight: '100px'}}> Career/Degree </Button>
                </Grid>
            </Grid>

            <Grid py={0} container sx={{flexDirection: {xs: "column", md: "row"}, justifyContent: {xs: "center", md: "space-around"}, alignContent: {xs: "center", md: "space-around"}}}  >
                <Grid item xs={3} mt={5}>
                    <ButtonBasic title="FlowChart" size="small" color="primary" link="http://flowcharts-csi.vercel.app/" image = "/images/FlowChart.png"/>
                </Grid>

                <Grid item xs={3} mt={5}>

                    <ButtonRouter title="Pathways" size="small" color="secondary" link="/PathwayChecklistPage" image = "/images/PCheckList.png"/>
                </Grid>

                <Grid item xs={3} mt={5}>
                    <ButtonRouter title="Tips" size="small" color="success" image = "/images/StdTip.jpg" link= "/StudentTips"/>
                </Grid>
            </Grid>

            <Footer/>
        </div>
    </Grid>

  )
}

export default CareerPage;
