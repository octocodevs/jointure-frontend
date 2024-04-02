import RegisterForm from "@/app/components/RegisterForm/RegisterForm";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <>
      <section className="flex justify-center items-center h-screen w-full">
        <RegisterForm className="w-1/2 mx-auto" />
        <figure className="hidden sm:block md:w-1/2">
          <Image
            src="/img/neon-pretzel-light.jpg"
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



