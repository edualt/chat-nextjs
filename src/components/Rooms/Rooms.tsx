import { RoomBox, RoomName, RoomContainer, RoomImg } from "./RoomStyles";
import Room from "./Room";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "@/contexts/userContext";
import { useSocket } from "@/hooks/useSocket";
import { UserContextType } from "@/types/UserContextType";
import { useRouter } from "next/router";
import axios from "axios";

interface RoomProps {
  setMessages: (messages: any) => void;
}

const Rooms = ({setMessages}: RoomProps) => {
  const [clients, setClients] = useState<UserContextType[]>([]);
  const {username} = useContext(UserContext);
  const {socket} = useSocket();
  const router = useRouter();

  useEffect(() => {
    axios.get("http://localhost:9002/clients").then((res) => {
      setClients(res.data);
    });
    socket?.on("onUsername", (payload) => {
        console.log(payload);
        if(username !== payload){
          setClients((prev) => {
            return [...prev, payload];
          });
        }
      });
    }
  , []);
    
  const handleClick = () => {
    router.push(`?room/general`);
    const roomName = window.location.href.split("/")[4];
    console.log(roomName);
    
    if (roomName !== "general"){
      setMessages([]);
    }
    
  };
  
  return (
    <RoomContainer>
      <RoomBox onClick={handleClick}>
        <RoomImg src="/images/icon.png" alt="Room" />
        <RoomName>General</RoomName>
      </RoomBox>
      {clients.map((client: any) => (
        username !== client && (
          <Room
          room={client}
          setMessages={setMessages}
          />
        )
      ))}
    </RoomContainer>
  );
};

export default Rooms;
