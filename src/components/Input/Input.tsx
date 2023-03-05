import { InputContainer, InputStyled } from "./InputStyles";
import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";
import { ImageUpload } from "@/utils/ImageUpload";
import { useSocket } from "@/hooks/useSocket";

interface InputProps {
  username: string;
}

const Input = ({ username }: InputProps) => {
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { socket } = useSocket();

  const sendMessage = () => {
    if (!socket) return;

    if (selectedFile) {
      const type = selectedFile.type.split("/")[0];

      const data = {
        type: type,
        file: selectedFile,
        message: message,
        username: username,
        room: window.location.href.split("/")[4] !== undefined ? window.location.href.split("/")[4] : "general"
      };

      if (window.location.href.split("/")[4] !== "general") {
        socket.emit("private-message", data);
      } else {
        socket.emit("newMessage", data);
      }
    } else if (message.length > 0) {
      const data = {
        type: "text",
        message: message,
        username: username,
        room: window.location.href.split("/")[4] !== undefined ? window.location.href.split("/")[4] : "general"
      };

      console.log(window.location.href.split("/")[4]);

      if (window.location.href.split("/")[4] !== "general") {
        socket.emit("private-message", data);
      } else {
        socket.emit("newMessage", data);
      }
    }

    const imageContainer = document.getElementById("image-container");
    const icon = document.getElementById("icon");
    if (imageContainer) {
      imageContainer.style.display = "none";
      icon!.style.display = "block";
    }

    setMessage("");
    setSelectedFile(null as any);
  };

  return (
    <div id="input-container">
      <InputContainer>
        <ImageUpload
          selectedImage={selectedFile}
          setSelectedImage={setSelectedFile}
        />
        <InputStyled
          placeholder="Escribe un mensaje..."
          type={"text"}
          value={message}
          multiple={true}
          onChange={(e) => setMessage(e.target.value)}
        />
        <AiOutlineSend size={25} onClick={sendMessage} cursor="pointer" />
      </InputContainer>
    </div>
  );
};

export default Input;
