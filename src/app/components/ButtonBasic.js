import React from 'react';
import PropTypes from "prop-types";
import {Button, Card,  CardActions, CardMedia, Grid} from '@mui/material';

function ButtonBasic({title, size, color, bgColor, link, image, alt}) {
    return (
        <>
                <Grid item sm={12}>
            <Card sx={{minWidth: 250}} style={{backgroundColor: bgColor}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image= {image}
                        alt= {alt}
                    />
                <CardActions>
                    <Button href= {link} size= {size} color = {color}>
                        <h5> {title} </h5>
                    </Button>
                    <Button href= {link} size= {size} color = {color}>
                        <h5> Second button demo </h5>
                    </Button>
                </CardActions>

            </Card>
                </Grid>
        </>
    );
}

/* DEV @ ADAM 4.15.2022 UPDATE: 4.20.2022
*  Title - name of the button
*  color - primary, secondary, warning, success, etc.
*  bg-color - any basic color in css (red, pink, blue etc.)
*  description: description of the button
*  size: small, medium, large
*  link: Add a link to button!
* */

ButtonBasic.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    size: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string
}

ButtonBasic.defaultProps = {
    title: "Test Button",
    color: "primary",
    size: "medium",
    bgColor: "white",
    description: "I am a default test button prop",
    link: "https://google.com",
    image: "/images/profBG.jpg",
    alt: "default alt"
}


export default ButtonBasic;