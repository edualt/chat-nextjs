import {useContext} from "react";
import { SocketContext } from "@/contexts/socketContext"; 

export const useSocket = () => {
    const {socket} = useContext(SocketContext)

    return {socket};
}