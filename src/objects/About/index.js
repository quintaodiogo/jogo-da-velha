import React from 'react';
import "./style.css";

const About = ({children, isActive}) => (
    <article className={`about ${isActive ? "active" : "inactive"}`}>{children}</article>
);
export default About;