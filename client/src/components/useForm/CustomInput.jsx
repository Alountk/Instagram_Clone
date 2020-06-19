import React from "react";

const CustomInput = ({ input, meta, type, title, ...props }) => {
  return (
    <div>
      {title && <span>{title}</span>}
      <input {...input} {...props} type={type}/>
      {meta.submitFailed && meta.error && <span>{meta.error}</span>}
    </div>
  );
};

export default CustomInput;
