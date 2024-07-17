import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, width } from '@mui/system';
import Events from './Events';

export default function Shipments({ state }) {
    const test = state.map((item) => {
        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>{item.packingSlipId}</Typography>
                </AccordionSummary>
                <Events state={item.eventHistory} />
            </Accordion>
        )
    })
    return (
        <Box sx={{ marginRight: 7 }}>
            {test}
        </Box>
    );
}
