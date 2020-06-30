import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import UseForm from "./../../components/useForm/UseForm";
import { Card } from "./../../components/card/Card";
import { Container } from "./../../components/container/Container";
import Input from "./../../components/input/Input";
import { Button } from "./../../components/button/Button";
import { Title } from "./../../components/title/Title";
import { Center } from "./../../components/center/Center";

import * as A from "./../../redux/auth/auth.actions";

export const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = (e: any) => {
    e.preventDefault();
    // console.log("LOGIN");
    dispatch(A.registerRequest({ email: "lolo", password: "llo" }));
  };
  const handleOnSubmit = (payload:any) => {
    console.log(payload)
  }
  return (
    <Container center={true}>
      <Card>
        <Title>Inicia sesión</Title>
        <UseForm onSubmit={handleOnSubmit} />
        <Center>
          <Link to="/register">Ir al Registro</Link>
        </Center>
      </Card>
    </Container>
  );
};
