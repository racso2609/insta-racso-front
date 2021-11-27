import {
  FC,
  useState,
  useContext,
  // useCallback,
  useEffect,
  createContext,
} from "react";
import { io, Socket } from "socket.io-client";
import { NOTIFICATION, JOIN_USER_ID } from "./constants";
import notify from "../../utils/notify";
import AuthContext from "../auth/authContext";

interface ISocketcontext {
  socket: Socket | null;
}
const initialState = {
  socket: null,
};

const SocketIoContext = createContext<ISocketcontext>(initialState);

export const SocketProvider: FC = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    if (!userId) return;
    const newSocket: Socket = io();

    newSocket.emit(JOIN_USER_ID, userId);

    newSocket.on(
      NOTIFICATION,
      ({
        message,
        type,
        entityId,
      }: {
        message: string;
        type: string;
        entityId: string;
      }) => {
        console.log("mesage", message, type, entityId);
        notify("info", message);
      }
    );
    setSocket(newSocket);
  }, [userId]);

  return (
    <SocketIoContext.Provider value={{ socket }}>
      {children}
    </SocketIoContext.Provider>
  );
};
export default SocketIoContext;
