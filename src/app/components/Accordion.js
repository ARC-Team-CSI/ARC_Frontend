import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import {Box} from "@mui/material";


const years = {
    freshman: ["Freshman Milestones fake text", " Freshman todo fake text", " Freshman Summer fake text"],
    sophomore: [" Sophomore Milestones fake text", " Sophomore todo fake text", " Sophomore Summer fake text"],
    junior: ["Junior Milestones fake text", " Junior todo fake text", " Junior Summer fake text"],
    senior: ["Senior Milestones fake text", "Senior todo fake text", " Senior Summer fake text"],
}


function SimpleAccordion(schoolYear) {
    const name = {...schoolYear};

    return (
            <Box>
            <Accordion >
                <AccordionSummary>
                    <Typography>Milestones</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {years[name.schoolYear][0]}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography>Todo</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {years[name.schoolYear][1]}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography>Summer</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {years[name.schoolYear][2]}
                </AccordionDetails>
            </Accordion>
            </Box>
    );
}

export default SimpleAccordion;