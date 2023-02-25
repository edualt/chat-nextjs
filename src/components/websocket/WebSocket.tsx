import { WebSocketContext } from "@/contexts/WebSocketContext";
import { useContext, useEffect, useState } from "react";

export const WebSocket = () => {
  const [value, setValue] = useState("");
  const socket = useContext(WebSocketContext);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected");
    });
    socket.on("onMessage", (data) => {
      console.log("onMessage event received");
      console.log(data);
    });

    return () => {
      console.log("Unregistering events...");
      socket.off("connect");
      socket.off("onMessage");
    };
  }, []);

  const onSubmit = () => {
    socket.emit('newMessage', value);
    setValue('');
  }

  return (
    <div>
      <h1>WebSocket Component</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
