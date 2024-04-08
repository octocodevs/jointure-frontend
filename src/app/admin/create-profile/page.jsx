import InfoButton from '@/app/components/Buttons/InfoButton'
import { Container, Typography } from '@mui/material'
import React from 'react'
import { Email, PhoneRounded, ChatBubble, VideoCallRounded } from "@mui/icons-material";
import OptionList from '@/app/components/InfoForms/OptionList';

const communicationOptions = [
  { value: 'email', label: 'Email', icon: <Email /> },
  { value: 'phone', label: 'Phone', icon: <PhoneRounded/> },
  { value: 'chat', label: 'Chat', icon: <ChatBubble/> },
  { value: 'video', label: 'Video Call', icon: <VideoCallRounded /> },
];

export default function CreateProfile() {
  return (
    <Container>
        <Typography variant='h1' justifyContent='center'>
            Crear perfil de empresa
        </Typography>
        <OptionList options={communicationOptions} /* onSelect={handleOptionSelect} */ />
        <InfoButton/>
    </Container>
  )
}
