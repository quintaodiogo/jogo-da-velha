import React from "react";
import "./style.css";

const AboutLink = ({ className = "" }) => (
    <a href="#to-do" className={`sobre ${className}`}>Sobre</a>
);

export default AboutLink;
