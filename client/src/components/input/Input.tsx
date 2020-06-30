import React, { FC } from "react";
import { reduxForm, Field } from "redux-form";

const style = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  borderRadius: "4px",
  marginBottom: "10px",
  padding: "10px 15px",
  width: "calc(100% - 30px)",
};
const spanStyle = {
  color: "#777",
  fontSize: "10px",
  fontWeight: 900,
  textTransform: "uppercase",
} as React.CSSProperties; //transforma el objeto a Propiedad
interface IInputProps {
  placeholder?: string;
  label?: string;
  input?: any;
  meta?: any;
  type?: any;
  title?: any;
}
const Input: FC<IInputProps> = ({
  label,
  input,
  meta,
  type,
  title,
  ...props
}) => {
  return (
    <div>
      {label && <span style={spanStyle}>{label}</span>}
      <input {...input} {...props} type={type} style={style} />
      {meta.submitFailed && meta.error && <span>{meta.error}</span>}
    </div>
  );
};

export default Input;
