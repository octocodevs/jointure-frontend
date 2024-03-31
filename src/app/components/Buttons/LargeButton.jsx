const { Button } = require("@mui/material")

const LargeButton = ({ onClick }) => {
    return (
      <Button onClick={onClick} variant="contained" className="bg-[#46A9B6] w-full hover:bg-[#337C86]">Enviar</Button>
    )
  }

  export default LargeButton
