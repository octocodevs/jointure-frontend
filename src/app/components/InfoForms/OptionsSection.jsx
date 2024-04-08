import InfoButton from '@/app/components/Buttons/InfoButton'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Email, PhoneRounded, ChatBubble, VideoCallRounded } from "@mui/icons-material";
import OptionList from '@/app/components/Mui/inputs/OptionList';

/* const sectorOptions = [
  { value: 'email', label: 'Email', icon: <Email /> },
  { value: 'phone', label: 'Phone', icon: <PhoneRounded/> },
  { value: 'chat', label: 'Chat', icon: <ChatBubble/> },
  { value: 'video', label: 'Video Call', icon: <VideoCallRounded /> },
]; */

const salesOptions = [
    { value: 'shop', label: 'Tienda física' },
    { value: 'online', label: 'Online' },
    { value: 'both', label: 'Ambos'},
  ];

export default function OptionsSection() {
  return (
    <Box component="section">
        <Box>
            <Typography variant='h5' color="secondary" justifyContent="left">
                Sector
            </Typography>
            <OptionList options={sectorOptions} /* onSelect={handleOptionSelect} */ />
        </Box>
        <Box>
            <Typography variant='h5' color="secondary" justifyContent="left">
                Sector
            </Typography>
            <OptionList options={salesOptions}>

            </OptionList>
        </Box>

{/*         <InfoButton/>
 */}    
    </Box>
  )
}
