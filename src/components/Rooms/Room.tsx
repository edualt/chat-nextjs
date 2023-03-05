import { RoomBox, RoomImg, RoomName } from "./RoomStyles";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "@/contexts/userContext";

interface RoomProps {
  room: string
  setMessages: (messages: any) => void;
}

const Room = ({ room, setMessages }: RoomProps) => {
  const router = useRouter();
  const {username} = useContext(UserContext);

  const handleClick = () => {
    router.push(`?room/${room}`)
    const roomName = window.location.href.split("/")[4];

    if (roomName !== room){
      setMessages([]);
    }
  };

  return (
      <RoomBox onClick={handleClick}>
        <RoomImg src="/images/icon.png" alt="Room" />
        <RoomName>{room}</RoomName>
      </RoomBox>
  );
};

export default Room;