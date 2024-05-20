import React from "react";
import "./style.css";

const Input = ({ id = "", value = "", type = "text"}) => (
    <input type={type} className="input" value={value} id={id} />
);
export default Input;
