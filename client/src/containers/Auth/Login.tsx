import React from "react";
import { Link } from 'react-router-dom';

import UseForm from "./../../components/useForm/UseForm";
import { Card } from "./../../components/card/Card";
import { Container } from "./../../components/container/Container";
import Input from "./../../components/input/Input";
import { Button } from "./../../components/button/Button";
import { Title } from "./../../components/title/Title";
import { Center } from "./../../components/center/Center";

export const Login = () => {
  return (
    <Container center={true}>
      {/* <UseForm onSubmit={handleOnSubmit} /> */}
      <Card>
        <Title>Inicia sesión</Title>
        <Input placeholder="Correo" label="Dirección del Correo" />
        <Input placeholder="Contraseña" label="Contraseña" />
        <Button block={true}>Enviar</Button>
        <Center>
          <Link to='/register'>Ir al Registro</Link>
        </Center>
      </Card>
    </Container>
  );
};
