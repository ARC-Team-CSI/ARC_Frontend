import React from 'react'
import {Box, Grid, Typography} from "@mui/material";
import ButtonBasic from "../components/ButtonBasic";
import '../styles/AcademicPage.css';
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import '../pages/PathwayChecklistPage.js';
import "../pages/StudentTips.js"




/* @Adam Dev.
   Academics page update! USER Story 2.3 mixed with previous USER Story 1.3
   Changed the structure of the page to a grid format using materialUI.
   I Created a "Button Basic" that mixes that takes in the props:
   title, description, color, bgcolor, link, size.
 */

const AcademicsPage = () => {
  return (
    <div className= "containerSplit">
    <ResponsiveAppBar/>
        <div className = "firstHalf">
            <Typography variant="h2" component="h1" pt={10} px={10} >
                Academics
            </Typography>
            <Box width={"300px"} px={10}>
            <Typography variant="subtitle1" component="p"  display={"inline"} >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, atque deserunt, dolore impedit ipsum molestiae officia perspiciatis quasi quisquam rerum totam voluptatem! Aperiam deleniti labore magnam, maiores minus odio placeat.
            </Typography>
            </Box>
        </div>

        <div className="secondHalf">
            <Grid container sx={{flexDirection: {xs: "column", md: "row"}, justifyContent: {xs: "center", md: "space-around"}, alignContent: {xs: "center", md: "space-around"}}}  >
                <Grid item xs={3} mt={5}>
                    <ButtonBasic title="FlowChart" size="small" color="primary" link="http://flowcharts-csi.vercel.app/" image = "/images/FlowChart.png"/>
                </Grid>

                <Grid item xs={3} mt={5}>

                   
                    <ButtonBasic title="Pathways" size="small" color="secondary" link="/PathwayChecklistPage" image = "/images/PCheckList.png"/>
                </Grid>

                <Grid item xs={3} mt={5}>
                    <ButtonBasic title="Tips" size="small" color="success" image = "/images/StdTip.jpg" link= "/StudentTips"/>
                </Grid>
            </Grid>

        </div>
    </div>

  )
}

export default AcademicsPage