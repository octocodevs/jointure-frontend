import Form from "@/app/components/RegisterForm/NewRegisterForm";
import { Box } from "@mui/material";
import Image from "next/image";
import {Container} from "@mui/material";
import Stack from '@mui/material/Stack';


export default function RegisterPage() {
  return (
    <>
      <Stack
      direction={{xs:'column', sm: 'row'}}
      spacing={{xs: 1, sm: 2, md: 4}}
      
      >
      <Box display="flex" justifyContent="space-between" flexDirection={{ xs: 'column', md: 'row' }} gap={4} spacing={2}>
        <Box>
          <Form />
        </Box>       
        <Box className="hidden sm:block h-screen">
          <Image
            src="/assets/img/neon-pretzel-light.jpg"
            alt="Picture of the author"
            width={1200}
            height={3400}
          />
        </Box>
      </Box>
      </Stack>
    </>
  );
}



