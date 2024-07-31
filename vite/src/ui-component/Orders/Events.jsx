import React, { useState } from 'react'
import { AccordionDetails, Typography } from '@mui/material'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Box from '@mui/material/Box';
import { format, parseISO } from 'date-fns';
import { useTheme } from '@emotion/react';
import { keyframes } from '@mui/system';

function Events({ state }) {
    const wsecoEvents = state.filter(item => item.carrier === "WSECO");
    const thirdPartyEvents = state.filter(item => item.carrier !== "WSECO");
    const lastThirdPartyEvent = thirdPartyEvents[0];
    const combinedEvents = lastThirdPartyEvent ? [lastThirdPartyEvent, ...wsecoEvents] : [...wsecoEvents];
    const [activeStep, setActiveStep] = useState(0);
    const theme = useTheme();
    const blink = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 0.6; }
  100% { opacity: 1; }
`;
    const NotActive = () => (
        <Box
            sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: 'lightgrey' // Use the current color for the dot
            }}
        />
    );
    const Active = () => (
        <Box
            sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: theme.palette.success.main, // Use the current color for the dot
                animation: `${blink} 1s infinite` // Apply the blink animation with a 1s duration, repeating infinitely
            }}
        />
    );

    return (
        <AccordionDetails>
            <Stepper orientation="vertical" nonLinear activeStep={activeStep}>
                {combinedEvents.map((item, index) => (
                    <Step key={item.description}>
                        <StepLabel
                            StepIconComponent={index === activeStep ? Active : NotActive} // Dynamically set based on active step
                        >
                            <Typography variant='h5'>{item.description}</Typography>
                        </StepLabel>
                        <StepContent>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant='body2'>{item.carrier}</Typography>
                                <Typography variant='body2'>{item.location.state}</Typography>
                                <Typography variant='body2'>{item.location.city}</Typography>
                                <Typography variant='body2'>{format(parseISO(item.eventDate), 'MM/dd/yyyy h:mm aaa')}</Typography>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </AccordionDetails>
    )
}
export default Events

