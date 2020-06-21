import React from "react";
import { Link } from 'react-router-dom';

import UseForm from "./../../components/useForm/UseForm";
import { Card } from "./../../components/card/Card";
import { Container } from "./../../components/container/Container";
import Input from "./../../components/input/Input";
import { Button } from "./../../components/button/Button";
import { Title } from "./../../components/title/Title";
import { Center } from "./../../components/center/Center";

export const Register = () => {
  return (
    <Container>
      {/* <UseForm onSubmit={handleOnSubmit} /> */}
      <Card>
        <Title>Registro</Title>
        <Input placeholder="Correo" label="Dirección del Correo" />
        <Input placeholder="Contraseña" label="Contraseña" />
        <Button block={true}>Enviar</Button>
        <Center>
          <Link to='/'>Iniciar sesión</Link>
        </Center>
      </Card>
    </Container>
  );
};
