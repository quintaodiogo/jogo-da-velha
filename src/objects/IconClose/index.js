import React from 'react';
import "./style.css";

const IconClose = ({onClick}) => (
    <a href="#home" className="icon-close" onClick={onClick}><span className='content'>Fechar</span></a>
);


export default IconClose;