import React from "react";
import "./style.css";
import Label from "../Label";
import Input from "../Input";

const Checkbox = ({ id = "", value = "", content = "" }) => (
  <>
    <Input value={value} id={id} content={content} type="checkbox" />
    <Label htmlFor={id} content={content} className="checkbox" />
  </>
);
export default Checkbox;
