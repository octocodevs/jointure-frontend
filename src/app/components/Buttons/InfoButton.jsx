import { Button } from '@mui/material'
import React from 'react'

export default function InfoButton() {
  
  return (
    <Button
      color='secondary' 
      elevation={3} 
      variant='outlined'
      sx={{
        height:61,
        width:109,
        fontSize:12,
        textTransform:'lowercase', 
        fontWeight:'400',
        color:'#101820'
      }} 
      >Prueba</Button>
  )
}
