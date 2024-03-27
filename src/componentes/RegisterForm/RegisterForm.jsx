import LargeInput from "@/componentes/Mui/inputs/LargeInput";
import SmallInput from "../Mui/inputs/SmallInput";
import CheckboxLabels from "../Mui/inputs/Checkbox";
import LargeButton from "../Mui/Buttons/LargeButton";

export default function RegisterForm (){
    return (
      <>
        <div className="flex justify-center items-center flex-col">

            <h3>Registro</h3>
        <form>
            <div className="flex flex-row">
                <SmallInput />
                <SmallInput />
            </div>
            <div>
                <LargeInput />
                <LargeInput />
            </div>
            <div className="flex flex-row">
                <SmallInput />
                <SmallInput />
            </div>
            <div className="ml-2">
                <CheckboxLabels />
            </div>

                <LargeButton />

            <div className="flex justify-center items-center">
                <p>¿Ya tienes una cuenta?<span>Inicia sesión aquí</span></p>
            </div>
        </form>
        </div>
          
      </>
    )
  }