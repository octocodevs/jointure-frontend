import LargeInput from "@/componentes/Mui/inputs/LargeInput";
import SmallInput from "../Mui/inputs/SmallInput";
import CheckboxLabels from "../Mui/inputs/Checkbox";
import LargeButton from '../Mui/Buttons/LargeButton';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BoxBasic from "../Mui/shapes/LockerShape";



export default function RegisterForm() {
  return (
    <Box
      className="flex justify-center items-center flex-col mt-4"
    >
      <BoxBasic />
      <Typography className="font-montserrat font-bold" variant="h5">Registro</Typography>
      <FormControl>
        <Box className="flex flex-row mt-2 justify justify-between gap-5"> 
          <SmallInput />
          <SmallInput />
        </Box>
        <Box className="mt-2"> 
          <LargeInput />
          <LargeInput />
        </Box>
        <Box className="flex flex-row mt-2 gap-5"> 
          <SmallInput />
          <SmallInput />
        </Box>
        <Box className="flex flex-row mt-2 gap-5"> 
          <SmallInput />
          <SmallInput />
        </Box>
        <Box className="mt-2"> {/* Contenedor del checkbox */}
          <LargeInput />          
          <CheckboxLabels />
        </Box>
        <Box className="mt-2"> {/* Contenedor del botón */}
         <LargeButton />
        </Box>
      </FormControl>
      <Box className="mt-2"> {/* Contenedor del texto de inicio de sesión */}
        <Typography className="mt-2 font-montserrat" variant="body1">¿Ya tienes una cuenta? <span className="text-[#46A9B6] font-montserrat">Inicia sesión aquí</span> </Typography>
      </Box>
    </Box>
  );
}