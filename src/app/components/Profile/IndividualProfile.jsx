import React from 'react'
import { Box, Grid } from '@mui/material'
import CollabCard from '../CollabCard'

export default function IndividualProfile() {
    return (
        <div>
            <Box sx={{
                display: 'flex'
            }}>
                <Grid container spacing={3}>
                    
                        <Grid  xs={12} md={6}>
                            <CollabCard  />
                        </Grid>

                </Grid>
                <CollabCard />
            </Box>
        </div>
    )
}


