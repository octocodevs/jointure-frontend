const { Button } = require("@mui/material")

const LargeButton = ({ onClick }) => {
    return (
      <Button type="submit" onClick={onClick} variant="contained" className="bg-[#46A9B6] w-full hover:bg-[#337C86]"sx={{ width: '100%' }} >Enviar</Button>
    )
  }

  export default LargeButton
