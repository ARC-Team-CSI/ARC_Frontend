import React from 'react';
import PropTypes from "prop-types";
import { Button } from '@mui/material';
import {Typography} from '@mui/material';

function ButtonBasic(title, description, size, color) {
    return (
        <div>
            <Button variant='contained' size= {size} color = {color}>
                <Typography variant='h3' gutterBottom> {title} </Typography>
                <Typography variant = 'body1'> {description} </Typography>
            </Button>
        </div>
    );
}

/*
*  Title - name of the button
*  color - primary, secondary, warning, success, etc.
*  description: description of the button
*  size: small, medium, large.
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
    size: "large",
    description: "I am a default test button prop"
}


export default ButtonBasic;