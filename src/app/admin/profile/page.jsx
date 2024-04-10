import React from 'react'
import ProfileData from '@/app/components/Profile/ProfileData'
import Divider from '@mui/material/Divider';
import { Box, Container, List } from '@mui/material';
import IndividualProfile from '@/app/components/Profile/IndividualProfile';
import CenteredTabs from '@/app/components/Profile/ProfileTabs';
import ResponsiveDrawer from '@/app/components/Navigation/ResponsiveDrawer.jsx';


export default function ProfilePage() {
    return (
        <>
                <ResponsiveDrawer>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ flexGrow: 1, borderBottom: 1, borderColor: 'divider' }}>
                    <ProfileData />
                </Box>
                <Divider variant="inset" component="li"/>
                <Box sx={{ flexGrow: 1 }}>
                    <CenteredTabs />
                </Box>
                </Box>
                </ResponsiveDrawer>
            
        </>
    )
}



