import React from 'react'
import {Box, Button, Grid, Typography} from "@mui/material";
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import '../styles/CareerPage.css';


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
                    <Button variant="contained" style={{maxWidth: '130px', maxHeight: '80px', minWidth: '130px', minHeight: '80px'}}> Resume </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained"  style={{maxWidth: '130px', maxHeight: '80px', minWidth: '130px', minHeight: '80px'}}> Career/Degree </Button>
                </Grid>
            </Grid>


        </div>
    </Grid>

  )
}

export default CareerPage;
