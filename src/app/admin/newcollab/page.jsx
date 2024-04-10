import ResponsiveDrawer from '@/app/components/Navigation/ResponsiveDrawer.jsx';
import NewCollabForm from '@/app/components/NewCollabForm/NewCollabForm';
import { Container} from '@mui/material'
import React from 'react'

export default function NewCollab(){
    return (
        <ResponsiveDrawer>
          <Container className="flex min-h-screen flex-col items-center justify-between p-10">
            <NewCollabForm />
          </Container>
        </ResponsiveDrawer>
      );
}
