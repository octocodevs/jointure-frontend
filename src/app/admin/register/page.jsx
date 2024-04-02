import RegisterForm from "@/app/components/RegisterForm/RegisterForm";
import { Box } from "@mui/material";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <>
      <Box className="flex justify-center items-center h-screen w-full">
        <RegisterForm className="w-1/2 mx-auto" />
        <Box className="hidden sm:block md:w-1/2">
          <Image
            src="/assets/img/neon-pretzel-light.jpg"
            alt="Picture of the author"
            layout="responsive"
            objectFit="contain"
            width={500}
            height={1000}
          />
        </Box>
      </Box>
    </>
  );
}



