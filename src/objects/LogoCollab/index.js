import React from "react";
import ColabCode from "../../img/logo.png";
import ColabCodeLight from "../../img/logo-light.png";

const LogoCollab = ({light = false}) => {
    return (
        <img src={light ? ColabCodeLight: ColabCode} alt="Logo da ColabCode" className="logo-collab" />
    );
};
export default LogoCollab;