import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import TipsText from "./TipsText";


function SimpleAccordion(schoolYear) {
    let name = {...schoolYear};

    console.log(name);

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Milestones</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <TipsText sub = {name.schoolYear} subindex={0}/>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Todo</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <TipsText sub = {name.schoolYear} subindex={1}/>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Summer</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TipsText sub = {name.schoolYear} subindex={2}/>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default SimpleAccordion;