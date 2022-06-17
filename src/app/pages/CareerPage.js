import React from 'react'
import {Box, Grid, Typography} from "@mui/material";
//import {Box, Typography} from "@mui/material";
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ButtonRouter from "../components/ButtonRouter"; 

const CareerPage = () => {
  return (

    <div className= "containerSplit">
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
        </div>
        <div className="secondHalf">
            <Grid container sx={{flexDirection: {xs: "column", md: "row"}, justifyContent: {xs: "center", md: "space-around"}, alignContent: {xs: "center", md: "space-around"}}}  >
                <Grid item xs={3} mt={5}>
                    <ButtonRouter title="Career/Degree" size="small" color="primary" link="http://flowcharts-csi.vercel.app/" image = "/images/FlowChart.png"/>
                </Grid>

                <Grid item xs={3} mt={5}>

                    <ButtonRouter title="Resume" size="small" color="secondary" link="/PathwayChecklistPage" image = "/images/PCheckList.png"/>
                </Grid>

                <Grid item xs={3} mt={5}>
                    <ButtonRouter title="Internship/Jobs" size="small" color="success" image = "/images/StdTip.jpg" link= "/StudentTips"/>
                </Grid>
            </Grid>
            <Grid item xs={4} mt={5}>
                    <ButtonRouter title="Gitbook" size="small" color="success" image = "/images/StdTip.jpg" link= "/StudentTips"/>
                </Grid>
                <Grid item xs={3} mt={5}>
                    <ButtonRouter title="CS Event" size="small" color="success" image = "/images\CSevent.jpg" link= "/StudentTips"/>
                </Grid>
            

        </div>
  </div>

  )
}

export default CareerPage;
