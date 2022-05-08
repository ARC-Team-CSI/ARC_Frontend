import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));



function SimpleAccordion(schoolYear) {
    const classes = useStyles();
    const name = {...schoolYear};

    const years = {
        freshman: ["Freshman Milestones fake text", " Freshman todo fake text", " Freshman Summer fake text"],
        sophomore: [" Sophomore Milestones fake text", " Sophomore todo fake text", " Sophomore Summer fake text"],
        junior: ["Junior Milestones fake text", " Junior todo fake text", " Junior Summer fake text"],
        senior: ["Senior Milestones fake text", "Senior todo fake text", " Senior Summer fake text"],
    }

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Milestones</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {years[name.schoolYear][0]}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Todo</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {years[name.schoolYear][1]}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Summer</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {years[name.schoolYear][2]}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default SimpleAccordion;