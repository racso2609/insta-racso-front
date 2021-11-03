import { createContext, useState, FC, useEffect } from "react";
import {
  currentUserRequest,
  ILoginRequest,
  loginRequest,
} from "../../httpsRequest/httpsRequest";

interface IAuth {
  auth: boolean;
  login: (data: ILoginRequest) => Promise<void>;
  getAuthToken: ()=>string|null;
}

export const defaultState = {
  auth: false,
  login: async (data: ILoginRequest) => {
    console.log(data);
  },
  getAuthToken: () => localStorage.getItem("jwt")

};

const AuthContext = createContext<IAuth>(defaultState);

export const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState(defaultState.auth);

  const setAuthToken = (token: string) =>
    localStorage.setItem("jwt", `Bearer ${token}`);
  const getAuthToken = () => localStorage.getItem("jwt");

  const login = async (data: ILoginRequest) => {
    const response = await loginRequest(data);
    if (!response) return;
    setAuthToken(response.Token);
    setAuth(true);
  };
  const currentUser = async () => {
    const token = getAuthToken()
    if(!token) return
    const data = await currentUserRequest(token);
    if (!data) return;
    setAuth(true);
  };

  //const signup = async(data:ILoginResponse)=>{

  //}
  //
  useEffect(() => {
    currentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AuthContext.Provider value={{ auth, login, getAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
