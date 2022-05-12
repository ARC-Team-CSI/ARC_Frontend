import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { purple } from '@mui/material/colors'
import { Container } from 'react-bootstrap';
import { margin, textAlign } from '@mui/system';

import tips from '../assests/lightbulb.png'


function TipsNavBar() {

  
  return (
    <Box sx={{ flexGrow: 1, pt: 8 }} className="AppBar">
        <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
  
          <Typography variant="h6" component="div" textAlign="center" sx={{ flexGrow: 2 }}>
          <img
          alt="icon"
          src={tips}
          height= "30px" width= "30px" 
        
        />
            StudentTips
          </Typography>
     
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TipsNavBar;