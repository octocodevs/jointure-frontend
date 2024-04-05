import SuccesAlert from "@/app/components/RegisterForm/SuccesAlert";
import { Box, Stack } from "@mui/material";

export default function RegisterPage() {
  return (
    <>
      <Box
      direction={{xs:'column', sm: 'row'}}
      spacing={{xs: 1, sm: 2, md: 4}}     
      >
      <SuccesAlert className="text-center" />
      </Box>
    </>
  );
}