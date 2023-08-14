import React from "react";

function Form(props) {
  const { type, placeholder } = props;
  return <input type={type} placeholder={placeholder} />;
}
export default Form;
