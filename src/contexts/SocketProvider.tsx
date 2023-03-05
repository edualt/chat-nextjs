import {SocketProviderType} from "../types/SocketProviderType";
import { io } from "socket.io-client";
import {SocketContext} from "./socketContext";

const socket = io("http://localhost:9002");

export const SocketProvider = ({ children }: SocketProviderType) => {

  return (
    <SocketContext.Provider value={{socket}}>
      {children}
    </SocketContext.Provider>
  )
}