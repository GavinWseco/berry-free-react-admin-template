import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Ordered',
    'In Procress',
    'Delivered',
];

export default function HorizontalLinearAlternativeLabelStepper({ state }) {
    const allDelivered = state.packingSlips.every(p => p.Status === "Delivered");
    const [done, setDone] = React.useState(3);
    React.useEffect(() => {
        if (allDelivered) {
            setDone(2);
        } else {
            setDone(4);
        }
    }, [allDelivered]);

    return (
        <Box sx={{ width: '100%', margin: 5 }}>
            <Stepper activeStep={done} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
