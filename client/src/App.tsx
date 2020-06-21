import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { Route } from "react-router-dom";
import { Login } from "./containers/Auth/Login";
import { Register } from "./containers/Auth/Register";

function App() {
  const {
    logged = false,
    username = null,
    email = null,
    message = null,
    loading = true,
  }: any = useSelector((state: any) => state.auth);
  const handleOnSubmit = (payload: any) => {
    console.log(payload);
  };
  return (
    <>
      <Route exact={true} path="/" component={Login} />
      <Route exact={true} path="/register" component={Register} />
    </>
  );
}

export default App;
