import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { purple } from "@mui/material/colors";
import { Container } from "react-bootstrap";



// import { View, Image, StyleSheet } from 'react-native';

import logo from "../assests/logo.png";
import ARC from "../assests/ARC.png";
import csilogo from "../assests/csilogo.png";
import tips from "../assests/lightbulb.png";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu_icon from '../assests/menu_icon.png'
import Avatar from '@mui/material/Avatar';
import '../pages/Home';
import { Link } from 'react-router-dom';
import TipsNavBar from "./TipsNavbar";
// import PopupState from '@mui/material/Popover'

function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="AppBar">
      <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
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
          <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        ml={30}
        onClick={handleClick}
        startIcon={<Avatar src={Menu_icon} />}

      >
  
      </Button>
     
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem component ={Link} to= "/">Home</MenuItem>
        <MenuItem onClick={handleClose}>Career</MenuItem>
        
      </Menu>
    
        </Toolbar>
        </AppBar>
    </Box>
  );
}

export default ResponsiveAppBar;