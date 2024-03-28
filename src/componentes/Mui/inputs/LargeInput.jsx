// import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function LargeInput(props) {
  const { id, label, variant, value, onChange,type } = props;

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id={id}
          label={label}
          variant={variant}
          value={value}
          onChange={onChange}
          type={type}
        />
      </div>
    </Box>
  );
}
