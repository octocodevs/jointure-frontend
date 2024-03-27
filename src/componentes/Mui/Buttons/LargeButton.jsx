import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function LargeButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button 
        variant="contained"
        sx={{
          width: '200px', 
          bgcolor: 'blue', 
          '&:hover': {
            bgcolor: 'darkblue', 
          }
        }}
      >
        Contained
      </Button>
    </Stack>
  );
}