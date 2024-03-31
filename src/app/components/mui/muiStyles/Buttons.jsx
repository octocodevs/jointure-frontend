import { Box, Button } from '@mui/material'
import React from 'react'

export default function Buttons() {
  return (
    <>
        <Box className="gap-3">
            <Button className="bg-blue hover:bg-blue-dark text-white mr-3" variant="contained">one</Button>
            <Button className="bg-teal hover:bg-teal-dark text-white mr-3" variant="contained">two</Button>
            <Button className="bg-green-light hover:bg-green" variant="contained">three</Button>
            <Button className="ml-3" variant="outlined" color='primary'>three</Button>
        </Box>
    </>
  )
};