import React from "react";
import "./style.css";

import IconClose from "../../objects/IconClose";
import AboutLink from "../../objects/Sobre";
import LogoCollab from "../../objects/LogoCollab";

const HeaderInternal = () => (
  <header className="header-internal">
    <LogoCollab light />
    <AboutLink className="-light" />
    <IconClose />
  </header>
);
export default HeaderInternal;
