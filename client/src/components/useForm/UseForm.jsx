import React from "react";
import { reduxForm, Field } from "redux-form";
import { validate } from "./validate";
import CustomInput from "./CustomInput";
import Input from "../input/Input";
import { Button } from "../button/Button";

let UseForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      {/* <Field name='username' component={Input} placeholder='Username' title='Username' /> */}
      <Field
        name="email"
        component={Input}
        placeholder="Correo"
        type="text"
        title="Email"
        label="Dirección del Correo"
      />
      <Field
        name="password"
        component={Input}
        placeholder="Contraseña"
        type="password"
        title="Password"
        label="Contraseña"
      />
      {/* <Input type='submit' value='Enviar' /> */}
      <Button type="submit" block={true}>
        Enviar
      </Button>
    </form>
  );
};

export default UseForm = reduxForm({
  form: "user",
  validate,
})(UseForm);
