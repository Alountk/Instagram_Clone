import React, { useEffect, FC } from "react";
import { useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import firebase from "firebase";
import "./App.css";
import CircleLoader from "react-spinners/ClipLoader";

import { Login } from "./containers/Auth/Login";
import { Register } from "./containers/Auth/Register";
import { NewsFeed } from "./containers/NewsFeed";
import { Profile } from "./containers/Profile";
import { NavBar } from "./components/navBar/NavBar";
import { Container } from "./components/container/Container";



const App = () => {
  const {
    logged = false,
    email = null,
    message = null,
    loading = true,
  }: any = useSelector((state: any) => state.auth);
  const history = useHistory();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (["/", "/register"].indexOf(window.location.pathname) > -1) {
          console.log(history)
          history.push('/app/newsfeed')
        }
      }else{
        if(/\app\/./.test(window.location.pathname)) {
          history.push('/')
        }
      }
    });
  }, [logged]);

  console.log(loading, logged);
  return (
    <>
      {loading ? (
        <Container center={true}>
          <CircleLoader size={50} color={"#123abc"} loading={loading} />
        </Container>
      ) : (
        <>
          <Route exact={true} path="/" component={Login} />
          <Route exact={true} path="/register" component={Register} />
          <Route path="/app" component={NavBar} />
          <Route exact={true} path="/app/newsfeed" component={NewsFeed} />
          <Route exact={true} path="/app/profile" component={Profile} />
        </>
      )}
    </>
  );
};

export default App;
