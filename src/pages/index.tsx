import { socket, WebSocketProvider } from "@/contexts/WebSocketContext";
import { Inter } from "@next/font/google";
import { FC } from "react";
import { useEffect } from "react";
import {
  Container,
  SectionLeft,
  SectionRight,
  Header,
} from "../styles/GlobalComponents";
import { RoomBox, RoomContainer } from "@/components/Rooms/RoomStyles";
import Rooms from "@/components/Rooms/Rooms";
import Chat from "@/components/Chat/Chat";
import Input from "@/components/Input/Input";

const inter = Inter({ subsets: ["latin"] });

const Home: FC = () => {
  return (
    <WebSocketProvider value={socket}>
      <Container>
        <SectionLeft>
          <Header>
            <h1>Contacts</h1>
          </Header>
          <Rooms/>
        </SectionLeft>
        <SectionRight>
          <Header>
            <h1>Chat</h1>
          </Header>
          <Chat />
          <Input />
        </SectionRight>
      </Container>
    </WebSocketProvider>
  );
};

export default Home;
