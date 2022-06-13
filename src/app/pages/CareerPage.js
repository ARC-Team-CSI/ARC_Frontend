import React from 'react'
import {Box, Typography} from "@mui/material";
import ResponsiveAppBar from '../components/ResponsiveAppBar';

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
  </div>

  )
}

export default CareerPage;
