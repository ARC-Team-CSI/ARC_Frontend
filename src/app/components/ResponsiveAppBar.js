import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { purple } from "@mui/material/colors";
import { Container } from "react-bootstrap";
import logo from "../assests/logo.png";
import ARC from "../assests/ARC.png";
import csilogo from "../assests/csilogo.png";
import tips from "../assests/lightbulb.png";

function ResponsiveAppBar() {


  return (
    <Box sx={{ flexGrow: 1 }} className="AppBar">
      <AppBar position="static" color="primary">
        <Toolbar>


          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* <Image
        style={styles.tinyLogo}
        source={{
          uri:"https://res.cloudinary.com/andreahabib/image/upload/v1643912027/ARC_b6azyw.svg",
        }}
      /> */}
            <img alt="arc logo" src={logo} height="60px" width="60px" />
            <img
              alt="academic resource centre"
              src={ARC}
              height="50px"
              width="110px"
            />
          </Typography>

          <Typography
            variant="h6"
            component="div"
            align="right"
            sx={{ flexGrow: 1 }}
          >
            <img
              alt="college of staten island logo"
              src={csilogo}
              height="50px"
              width="250px"
            />
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ResponsiveAppBar;
