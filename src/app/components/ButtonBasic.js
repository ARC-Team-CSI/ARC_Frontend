import React from 'react';
import PropTypes from "prop-types";
import { Button, Typography, Card, CardContent, CardActions} from '@mui/material';

function ButtonBasic({title, description, size, color, bgColor}) {
    return (
        <>
            <Card sx={{minWidth: 300}} style={{backgroundColor: bgColor, color: ""}}>
                <CardContent>
                    <Typography variant='h3'> {title} </Typography>
                    <span>
                <Typography variant = 'subtitle1'> {description} </Typography>
                </span>
                </CardContent>
                <CardActions style = {{display: "flex", justifyContent: "center"}}>
            <Button variant='contained' size= {size} color = {color}>
                    <h5> Go to the section </h5>
            </Button>
                </CardActions>
            </Card>
        </>
    );
}

/* DEV @ ADAM 4.15.2022
*  Title - name of the button
*  color - primary, secondary, warning, success, etc.
*  bg-color - any basic color in css (red, pink, blue etc.)
*  description: description of the button
*  size: small, medium, large
* */

ButtonBasic.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    size: PropTypes.string,
    description: PropTypes.string
}

ButtonBasic.defaultProps = {
    title: "Test Button",
    color: "primary",
    size: "medium",
    bgColor: "white",
    description: "I am a default test button prop"
}


export default ButtonBasic;