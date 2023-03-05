import { ChatMessagesContainer } from "./ChatStyles";
import { useEffect } from "react";
import { useSocket } from "@/hooks/useSocket";
import Message from "../Message/Message";

interface ChatProps {
  username: string;
  messages: any[];
  setMessages: (messages: any) => void;
}

const Chat = ({ username, messages, setMessages }: ChatProps) => {
  const { socket } = useSocket();

  let owner = "";

  useEffect(() => {
    socket?.on("onMessage", (payload) => {
      console.log("onMessage");
      console.log(payload);
      if (payload.room === "general" && window.location.href.split("/")[4] === "general") {
        setMessages((prev: any[]) => {
          return [...prev, payload];
        });
      }
    });

    socket?.on("private-message", (payload) => {
      console.log("private-message");
      console.log(payload);
      if (payload.room === window.location.href.split("/")[4] || payload.username === window.location.href.split("/")[4] && username === payload.room) {
        setMessages((prev: any[]) => {
          return [...prev, payload];
        });
      }

    });

    return () => {
      socket?.off("onMessage");
    };
  }, []);

  return (
    <>
      <ChatMessagesContainer>
        {messages.map(
          (data, index) => (
            data.username == username ? (owner = "me") : (owner = "notme"),
            (
              <Message
                owner={owner}
                key={index}
                username={data.username}
                message={data.message}
                file={data.file}
                type={data.type}
              />
            )
          )
        )}
      </ChatMessagesContainer>
    </>
  );
};

export default Chat;
