import { Grid, Typography } from '@mui/material'
import React from 'react'
import { format, parseISO } from 'date-fns'

function Header({ state }) {
    return (
        <Grid container>
            <Grid item xs={12} >
                <Typography variant='h4' sx={{ marginBottom: 1 }} >{state.customer.companyName}</Typography>
            </Grid>
            <Grid item xs={12} >
                <Typography variant='h5' sx={{ marginBottom: 1, marginRight: 7 }}>{state.warehouseName}</Typography>
            </Grid>
            <Grid item xs={12} >
                <Typography variant='h5' sx={{ marginBottom: 1 }} >Ordered by: {state.customer.name}</Typography>
            </Grid>
            <Grid item xs={12} >
                <Typography variant='h5' sx={{ marginBottom: 1 }} >Ordered on: {format(parseISO(state.createdDate), 'MM/dd/yyyy h:mm aaa')}</Typography>
            </Grid>
        </Grid>
    )
}

export default Header
