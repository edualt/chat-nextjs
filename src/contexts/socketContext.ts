import { createContext } from "react";
import {SocketContextType} from "../types/SocketContextType" 

export const SocketContext = createContext<SocketContextType>({} as SocketContextType);