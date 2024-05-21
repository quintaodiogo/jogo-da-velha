import React from "react";
import LogoCollab from "../../objects/LogoCollab";
import Sobre from "../../objects/Sobre/index";
import Menu from "../../objects/Menu/index";
import "./style.css";
const Header = () => {
  return (
    <header className="header">
      <LogoCollab/>
      <Sobre/>
      <Menu/>
    </header>
  );
};
export default Header;