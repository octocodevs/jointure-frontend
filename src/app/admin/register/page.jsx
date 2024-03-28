import RegisterForm from "@/componentes/RegisterForm/RegisterForm";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <>
      <section className="flex justify-center items-center h-screen w-screen ">
        <RegisterForm />
        <figure className="ml-4 w-1/2 h-full "> {/* Add some margin for better spacing */}
          <Image
            src="/assets/img/neon-pretzel-light.jpg"
            alt="Picture of the author"
            layout="responsive"
            objectFit="contain"
            width={500}
            height={1000}
          />
        </figure>
      </section>
    </>
  );
}



