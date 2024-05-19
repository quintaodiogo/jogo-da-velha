import React from "react";
import "./style.css";
import Label from "../Label";

const Input = ({ id, value, content }) => (
  <>
    <input type="checkbox" className="input" value={value} id={id} />
    <Label content={content} htmlFor={id} />
  </>
);
export default Input;
