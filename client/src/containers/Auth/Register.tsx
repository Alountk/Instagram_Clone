import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as A from "./../../redux/auth/auth.actions";

import UseForm from "./../../components/useForm/UseForm";
import { Card } from "./../../components/card/Card";
import { Container } from "./../../components/container/Container";
import Input from "./../../components/input/Input";
import { Button } from "./../../components/button/Button";
import { Title } from "./../../components/title/Title";
import { Center } from "./../../components/center/Center";

export const Register = () => {
  const dispatch = useDispatch();
  const handleOnSubmit = (payload: any):any => {
    dispatch(A.registerRequest(payload))
  }
  return (
    <Container center={true}>
      <Card>
        <Title>Registro</Title>
        <UseForm onSubmit={handleOnSubmit} />
        <Center>
          <Link to="/">Iniciar sesión</Link>
        </Center>
      </Card>
    </Container>
  );
};
