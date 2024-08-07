import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector from '@mui/material/StepConnector';
import Check from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';

const steps = [
    'Ordered',
    'In Process',
    'Delivered',
];

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[300],
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: theme.palette.primary.main,
    }),
    '& .QontoStepIcon-completedIcon': {
        color: theme.palette.primary.main,
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

export default function HorizontalLinearAlternativeLabelStepper({ state }) {
    const allDelivered = state.packingSlips.every(p => p.Status === "Delivered");
    const [done, setDone] = React.useState(3);
    React.useEffect(() => {
        console.log('allDelivered:', allDelivered);
        if (allDelivered) {
            console.log('Setting done to 2');
            setDone(4);
        } else {
            console.log('Setting done to 4');
            setDone(2);
        }
    }, [allDelivered]);

    return (
        <Box sx={{ width: '100%', margin: 5 }}>
            <Stepper activeStep={done} alternativeLabel connector={<StepConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}