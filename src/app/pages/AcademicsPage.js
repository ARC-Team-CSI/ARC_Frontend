import React from 'react'
import {Grid} from "@mui/material";
import ButtonBasic from "../components/ButtonBasic";

import '../styles/AcademicPage.css';

const AcademicsPage = () => {
  return (
    <div>
        <Grid container={true} spacing={3} mt={3} mb={3} direction="row" justifyContent="space-evenly" alignItems="center" >
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