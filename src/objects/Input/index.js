import React from "react";
import "./style.css";
import Label from "../Label";

const Input = ({ id = "", value = "", content = "", type = "text"}) => (
  <>
    <input type={type} className="input" value={value} id={id} />
    <Label content={content} htmlFor={id} />
  </>
);
export default Input;
