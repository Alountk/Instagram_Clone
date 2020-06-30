import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CircleLoader from "react-spinners/ClipLoader";

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
  const { loading } = useSelector((state: any) => state?.auth);
  const handleOnSubmit = (payload: any) => {
    dispatch(A.loginRequest(payload));
  };
  return (
    <>
      {loading ? (
        <Container center={true}>
          <CircleLoader size={50} color={"#123abc"} loading={loading} />
        </Container>
      ) : (
        <Container center={true}>
          <Card>
            <Title>Inicia sesión</Title>
            <UseForm onSubmit={handleOnSubmit} />
            <Center>
              <Link to="/register">Ir al Registro</Link>
            </Center>
          </Card>
        </Container>
      )}
    </>
  );
};
