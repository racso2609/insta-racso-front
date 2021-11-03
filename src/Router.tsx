import React, { ReactElement, useContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import AuthContext from "./context/auth/authContext";
import Home from "./Views/Home/Home";
import Login from "./Views/Login/Login";
import CreatePost from "./Views/Post/CreatePost";

interface IRouter{
  auth: boolean;
  children: ReactElement|ReactElement[];
}


const PrivateRouter = ({ children, auth }:IRouter) => {
  return auth ? 
    <Switch>
      {children}
        <Redirect to='/'/>
    </Switch>
    : null;
};

const PublicRouter = ({ children, auth }:IRouter) => {
  return !auth ? 
    <Switch>
      {children}
        <Redirect to='/'/>
    </Switch>
    : null;
};

const Routes: React.FC = () => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <PublicRouter auth={auth}>
        <Route exact path="/" component={Login} />
      </PublicRouter>
      <PrivateRouter auth={auth}>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/create-post" component={CreatePost} />
      </PrivateRouter>
    </BrowserRouter>
    </>
  );
};

export default Routes;
