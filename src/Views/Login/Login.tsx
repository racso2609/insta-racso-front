import React, { useContext } from "react";
import { Input } from "../../components/styledComponents/Inputs";
import { ContainerPage } from "../../components/styledComponents/PageContainer";
import AuthContext from "../../context/auth/authContext";
import UseInput from "../../hooks/useInput";
import { ILoginRequest } from "../../httpsRequest/httpsRequest";

const Login: React.FC = () => {
  const { login } = useContext(AuthContext);
  const email = UseInput("text");
  const password = UseInput("password");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const data: ILoginRequest = {
      email: email.value,
      password: password.value,
    };
    await login(data);
  };

  return (
    <ContainerPage
      display="flex"
      justify="center"
      aling="center"
      flexDirection="column"
    >
      <div
        style={{
          textAlign: "center",
          border: "solid 1px black",
          padding: 70,
          borderRadius: 10,
        }}
      >
        <span>Hola bebe ya que contigo no sirve la magia</span>
        <form style={{ padding: 10 }} onSubmit={onSubmit}>
          <Input {...email} placeholder="Email" name="email" />
          <Input {...password} placeholder="Password" name="password" />
          <button>Login</button>
        </form>
      </div>
    </ContainerPage>
  );
};

export default Login;
