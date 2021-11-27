import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/auth/authContext";
import { PostProvider } from "./context/PostContext/PostContext";
import { ToastContainer } from "react-toastify";
import { SocketProvider } from "./context/socketIo/socketIoContext";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <AuthProvider>
    <SocketProvider>
      <PostProvider>
        <App />
        <ToastContainer />
      </PostProvider>
    </SocketProvider>
  </AuthProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
