import React from 'react'
import {Grid} from "@mui/material";
import ButtonBasic from "../components/ButtonBasic";
import ResponsiveAppBar from '../components/ResponsiveAppBar';

import '../styles/AcademicPage.css';

/* @Adam Dev.
   Academics page update! USER Story 2.3 mixed with previous USER Story 1.3
   Changed the structure of the page to a grid format using materialUI.
   I Created a "Button Basic" that mixes that takes in the props:
   title, description, color, bgcolor, link, size.
 */

const AcademicsPage = () => {
  return (
    <div>
      <ResponsiveAppBar/>


      
        <Grid container sx={{flexDirection: {xs: "column", md: "row"}}} spacing={3} mt={10} mb={3}  justifyContent="space-evenly" alignItems="center" >
            <Grid item xs={5}>
            <ButtonBasic title="Academics" description="Ea repellendus natus sed dolorem quam sed quia recusandae ut nemo voluptatem et be" size="large" color="primary" link="/"/>
            </Grid>

            <Grid item xs={5}>
                <ButtonBasic title="Flow Chart" description="Ea repellendus natus sed dolorem quam sed quia recusandae ut nemo voluptatem et be" size="large" color="secondary"/>
            </Grid>

            <Grid item xs={5}>
                <ButtonBasic title="Freshman Tips" description="Ea repellendus natus sed dolorem quam sed quia recusandae ut nemo voluptatem et be" size="large" color="success"/>
            </Grid>

            <Grid item xs={5}>
                <ButtonBasic title="Sophomore Tips" description="Ea repellendus natus sed dolorem quam sed quia recusandae ut nemo voluptatem et be" size="large" color="success"/>
            </Grid>

        </Grid>
    </div>

  )
}

export default AcademicsPage