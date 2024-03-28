

import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';

export default function BoxBasic() {
  return (
    <Box
      component="section"
      sx={{
        padding: 2,
        border: '1px',
        backgroundColor: '#46A9B6',
        borderRadius: 50, // Valor arbitrario para redondear las esquinas
      }}
    >
      <LockIcon className='text-white' />
    </Box>
  );
}
