import { socket, WebSocketProvider } from "@/contexts/WebSocketContext";
import { Inter } from "@next/font/google";
import { FC } from "react";
import { useEffect } from "react";
import { WebSocket } from "@/components/websocket/WebSocket";

const inter = Inter({ subsets: ["latin"] });

const Home: FC = () => {
  return (
    <WebSocketProvider value={socket}>
      <WebSocket/>
  </WebSocketProvider>
  );
};

export default Home;
