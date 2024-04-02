import NewRegisterForm from "@/app/components/RegisterForm/NewRegisterForm";
import { Box } from "@mui/material";
import Image from "next/image";
import {Container} from "@mui/material";

export default function RegisterPage() {
  return (
    <>
      <Container className="flex justify-center items-center">
        <NewRegisterForm />
      </Container>
    </>
  );
}