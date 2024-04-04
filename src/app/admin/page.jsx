import { Container, Typography } from '@mui/material'
import ResponsiveDrawer from '../components/Navigation/ResponsiveDrawer.jsx';
export default function Home() {
  return (
    <ResponsiveDrawer>
      <Container className="flex min-h-screen flex-col items-center justify-between p-24">
        <Typography variant="h1" className="text-red-600">Jointure</Typography>
      </Container>
    </ResponsiveDrawer>
  );
}
