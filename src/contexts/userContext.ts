import {createContext} from "react";
import { UserContextType } from "../types/UserContextType";

const UserContext = createContext<UserContextType>({} as  UserContextType);

export {UserContext};