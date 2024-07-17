import { Grid, Typography } from '@mui/material'
import React from 'react'

function Header({ state }) {
    return (
        <Grid container>
            <Grid item xs={6} >
                <Typography variant='h2' sx={{ marginBottom: 1 }} >{state.customer.companyName}</Typography>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography variant='h4' sx={{ marginBottom: 1, marginRight: 7 }}>{state.warehouseName}</Typography>
            </Grid>
            <Grid item xs={12} >
                <Typography variant='h5' sx={{ marginBottom: 1 }} >{state.customer.name}</Typography>
            </Grid>
            <Grid item xs={12} >
                <Typography variant='h5' sx={{ marginBottom: 1 }} >{state.createdDate}</Typography>
            </Grid>
        </Grid>
    )
}

export default Header
