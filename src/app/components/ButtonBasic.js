import React from 'react';
import PropTypes from "prop-types";
import {Button, Card,  CardActions, CardMedia, Grid} from '@mui/material';

/*
        @Adam Dev 4.27.2022
        -Amena Link Push

 */


function ButtonBasic({title, size, color, bgColor, link, image, alt}) {
    const style = {
        backgroundColor: bgColor,
        height: '20%',
        transition: "all ease 200ms",
        boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.4)",
    }

    return (
        <>
                <Grid item sm={12} style={style}>
            <Card sx={{minWidth: "250px",
                       '&:hover': { boxShadow: "-1px 10px 29px 0px  rgba(0,0,0,0.8)",
                                    transform: "scale(1.03)",
                                    transition: "all ease 200ms",
                       },
            }}  >
                    <CardMedia
                        component= "img"
                        height="140"
                        image= {image}
                        alt= {alt}
                        sx = {{'&:hover': {
                                filter: "grayscale(100%)",
                            }}}
                    />
                <CardActions>
                    <Button variant={"outlined"} href= {link} size= {size} color = {color}>
                        <h5> {title} </h5>
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
*  size: small, medium, large
*  link: Add a link to button!
*  image: Add the url to image
*  alt: adds details for accesibility.
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
    size: "medium" ,
    bgColor: "white",
    description: "I am a default test button prop",
    link: "https://google.com",
    image: "/images/profBG.jpg",
    alt: "default alt"
}


export default ButtonBasic;
