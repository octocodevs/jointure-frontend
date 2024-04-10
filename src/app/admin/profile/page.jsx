import React from 'react'
import ProfileData from '@/app/components/Profile/ProfileData'
import { Box } from '@mui/material';
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
                <Box sx={{ flexGrow: 1 }}>
                    <CenteredTabs />
                </Box>
                </Box>
                </ResponsiveDrawer>
            
        </>
    )
}



