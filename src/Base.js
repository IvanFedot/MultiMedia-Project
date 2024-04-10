import React, { useState } from "react";
import Header from "./files/Header.js";
import Middle from "./files/Middle.js";
import Spheres_Table from "./files/Spheres_Table.js";
import Start from "./files/sound/Start.wav";
import Game from "./files/sound/Game_Test.wav";
import Web from "./files/sound/Web_Test.wav";
import Cyber from "./files/sound/Cyber.wav";
import Soft from "./files/sound/Soft.wav";
import Data from "./files/sound/Data.wav";

export default function Base() {
    const SoundTable = [Start, Game, Web, Cyber, Data, Soft]

    let [tableActive, setTableActive] = useState(false);
    let [namePanel, setNamePanel] = useState("");
    let [soundChange, setSoundChange] = useState(SoundTable[0]);

    return (
        <div>
            <Spheres_Table active = {tableActive} setActive = {setTableActive} namePanel = {namePanel} setNamePanel = {setNamePanel} soundChange = {soundChange} setSoundChange = {setSoundChange} />
            <Header />
            <Middle setActive = {setTableActive} namePanel = {namePanel} setNamePanel =  {setNamePanel} soundChange = {soundChange} setSoundChange = {setSoundChange} SoundTable = {SoundTable} />
        </div>
    )
}