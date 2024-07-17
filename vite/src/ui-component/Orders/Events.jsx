import React from 'react'
import { AccordionDetails, Typography } from '@mui/material'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Box from '@mui/material/Box';

function Events({ state }) {
    const [activeStep, setActiveStep] = React.useState(10);

    return (
        <AccordionDetails>
            <Stepper activeStep={activeStep} orientation="vertical">
                {state.map((item) => {
                    return (
                        <Step key={item.description}>
                            <StepLabel>
                                {item.description}
                            </StepLabel>
                            <StepContent>

                                <Box sx={{ mb: 2 }}>
                                    <Typography>{item.dateTime}</Typography>
                                    <Typography>{item.location.state}</Typography>
                                    <Typography>{item.location.city}</Typography>

                                </Box>
                            </StepContent>
                        </Step>
                    )
                })}
            </Stepper>
        </AccordionDetails>
    )
}
export default Events

