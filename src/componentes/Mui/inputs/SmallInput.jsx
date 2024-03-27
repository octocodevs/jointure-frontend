import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SmallInput() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '24ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField 
      id="outlined-basic" 
      label="Nombre" 
      variant="outlined" 
      type="text"
      value=""
      onChange=""
      required
      placeholder="Escribe tu nombre ..."
      pattern="[A-Za-z ]+"
      />
      </div>

    </Box>
  );
}