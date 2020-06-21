import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import UseForm from "./components/useForm/UseForm";
import { Card } from "./components/card/Card";
import { Container } from "./components/container/Container";
import Input from "./components/input/Input";
import { Button } from "./components/button/Button";
import { Title } from "./components/title/Title";
import { Link } from "./components/link/Link";

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
    <Container>
      {/* <UseForm onSubmit={handleOnSubmit} /> */}
      <Card>
        <Title>Inicia sesión</Title>
        <Input placeholder='Correo' label='Dirección del Correo' />
        <Input placeholder='Contraseña' label='Contraseña' />
        <Button>Enviar</Button>
        <Link>Ir al Registro</Link>
      </Card>
    </Container>
  );
}

export default App;
