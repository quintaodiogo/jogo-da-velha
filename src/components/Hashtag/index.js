import React from "react";
import "./style.css";
import Card from "../../objects/Card";
import Player from "../../objects/Player";

const Hashtag = () => (
    <Card> 
        <Player player="x"/>
        <Player player="o"/>
        <Player player="x"/>

        <Player player="o"/>
        <Player player="x"/>
        <Player player="o"/>

        <Player player="x"/>
        <Player player="o"/>
        <Player player="x"/>
    </Card>
);

export default Hashtag;