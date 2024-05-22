import React from "react";
import "./style.css";

import LogoCollab from "../../objects/LogoCollab";
import AboutLink from "../../objects/Sobre/index";
import Menu from "../../objects/Menu/index";

const Header = ({onClick}) => {
  return (
    <header className="header">
      <LogoCollab/>
      <AboutLink/>
      <Menu onClick={onClick}/>
    </header>
  );
};
export default Header;