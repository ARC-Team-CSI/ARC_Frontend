import React from 'react';
import PropTypes from "prop-types";
import { Button} from '@mui/material';
import { Typography } from '@mui/material';

function ButtonBasic({title, description, size, color}) {
    return (
        <>
            <Button variant='contained' size= {size} color = {color}>

                <Typography variant='h3'> {title} </Typography>
                <Typography variant = 'subtitle1'> {description} </Typography>

            </Button>
        </>
    );
}

/*
*  Title - name of the button
*  color - primary, secondary, warning, success, etc.
*  description: description of the button
*  size: small, lm
* */

ButtonBasic.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    description: PropTypes.string
}

ButtonBasic.defaultProps = {
    title: "Test Button",
    color: "primary",
    size: "medium",
    description: "I am a default test button prop"
}


export default ButtonBasic;