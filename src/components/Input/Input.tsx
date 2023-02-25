import { InputContainer, InputStyled } from "./InputStyles";
import { AiOutlineSend } from "react-icons/ai";

const Input = () => {
  return (
    <InputContainer>
      <InputStyled placeholder="Escribe un mensaje..." />
      <AiOutlineSend size={25} />
    </InputContainer>
  );
};

export default Input;
