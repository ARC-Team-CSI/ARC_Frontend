import React from 'react'

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import SideBarTips from "../components/SideBarTips";
import {Box, CssBaseline} from "@mui/material";




function StudentTips() {
  return (
    <div>
        <CssBaseline>
        <ResponsiveAppBar/>
        </CssBaseline>
        <Box>
        <SideBarTips/>
        </Box>
    </div>
  )
}

export default StudentTips ;
