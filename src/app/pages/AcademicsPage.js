import React from 'react'
import {Grid} from "@mui/material";
import ButtonBasic from "../components/ButtonBasic";

import '../styles/AcademicPage.css';

const AcademicsPage = () => {
  return (
    <div>
        <Grid container={true} spacing={3} mt={3} mb={3} direction="row" justifyContent="space-evenly" alignItems="end" >
            <Grid item xs={3}>
            <ButtonBasic title="Academics" description="Ea repellendus natus sed dolorem quam sed quia recusandae ut nemo voluptatem et be" size="large" color="primary"/>
            </Grid>

            <Grid item xs={3}>
                <ButtonBasic title="Pathway" description="Ea repellendus natus sed dolorem quam sed quia recusandae ut nemo voluptatem et be" size="large" color="secondary"/>
            </Grid>

            <Grid item xs={3}>
                <ButtonBasic title="Professional" description="Ea repellendus natus sed dolorem quam sed quia recusandae ut nemo voluptatem et be" size="large" color="success"/>
            </Grid>
        </Grid>
    </div>

  )
}

export default AcademicsPage