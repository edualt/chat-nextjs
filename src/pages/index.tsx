import { FC } from "react";
import { useState } from "react";
import {
  Container,
  SectionLeft,
  SectionRight,
  Header,
} from "../styles/GlobalComponents";
import Rooms from "@/components/Rooms/Rooms";
import Chat from "@/components/Chat/Chat";
import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";
import { UserContext } from "@/contexts/userContext";
import MessageType from "@/types/MessageType";

const Home: FC = () => {
  const [showModal, setShowModal] = useState(true);
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);



  return (
    <>
    <UserContext.Provider value={{username}}>
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} setUsername={setUsername}></Modal>
      ) : (
        <Container>
        <SectionLeft>
          <Header>
            <h1>Contacts</h1>
          </Header>
          <Rooms setMessages={setMessages}/>
        </SectionLeft>
        <SectionRight>
          <Header>
            <h1>Chat</h1>
          </Header>
          <Chat username={username} messages={messages} setMessages={setMessages}/>
          <Input username={username}/>
        </SectionRight>
      </Container>
      )}
      </UserContext.Provider>
      </>
      
  );
};

export default Home;
