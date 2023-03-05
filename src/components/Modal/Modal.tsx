import { InputContainer, InputStyled } from "../Input/InputStyles";
import { ModalContainer, ModalContent, ModalTitle } from "./ModalStyles";
import { AiOutlineSend } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useSocket } from "@/hooks/useSocket";
import { useRouter } from "next/router";

interface ModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  setUsername: (username: string) => void;
}

const Modal = ({ showModal, setShowModal, setUsername }: ModalProps) => {
  const [value, setValue] = useState("");
  const {socket} = useSocket();
  const generalRoom = "general";
  const router = useRouter();

  useEffect(() => {
    socket?.on("connect", () => {
      console.log("Connected");
    });

    return () => {
      console.log("Unregistering events...");
      socket?.off("connect");
      socket?.off("onMessage");
    };
  }, []);

  const handleSubmit = () => {
    socket?.emit("setUsername", { username: value, room: generalRoom });
    setShowModal(false);
    setUsername(value);
    setValue("");
    router.push(`?room/${generalRoom}`);
    
  };

  return (
    <>
      {showModal ? (
        <ModalContainer>
          <ModalContent>
            <ModalTitle>Bienvenido! Ingresa tu nombre</ModalTitle>
            <InputContainer>
              <InputStyled
                placeholder="Escribe un mensaje..."
                type={"text"}
                value={value}
                onSubmit={value ? handleSubmit : undefined}
                onChange={(e) => setValue(e.target.value)}
              />
              <AiOutlineSend
                size={25}
                onClick={value ? handleSubmit : undefined}
                cursor="pointer"
              />
            </InputContainer>
          </ModalContent>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default Modal;
