import React from "react";
import "./style.css";

import IconClose from "../../objects/IconClose";
import AboutLink from "../../objects/Sobre";
import LogoCollab from "../../objects/LogoCollab";

const HeaderInternal = ({onClick}) => {

  return (
    <header className="header-internal">
      <LogoCollab light />
      <AboutLink className="-light" />
      <IconClose onClick={onClick}/>
    </header>
  );
};

export default HeaderInternal;
