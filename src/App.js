import React from "react";
import Sobre from './objects/Sobre/index.js'; // Fix the case of the file path
import Logo from "./objects/Logo/index.js";
import Menu from "./objects/Menu/index.js";

function App() {
  return (
    <>
      <Logo/>
      <Sobre/>
      <Menu/>
    </>
  );
}

export default App;
