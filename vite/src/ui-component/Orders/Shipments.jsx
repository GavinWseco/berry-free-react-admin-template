import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, width } from '@mui/system';
import Events from './Events';
import { Grid } from '@mui/material';

export default function Shipments({ state }) {
    const test = state.map((item) => {
        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant='h5'>{item.id}</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 4 }}>
                            <Typography variant='h5'>{item.status}</Typography>
                        </Grid>
                    </Grid>
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
