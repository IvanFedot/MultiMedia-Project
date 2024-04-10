import React from "react";
import Spheres_Button from "./Spheres_Button";
import Spheres_Panel from "./Spheres_Panel";

export default function Middle( {setActive, namePanel, setNamePanel, soundChange, setSoundChange, SoundTable} ) {
    return (
        <div className = "Mid">
            <Spheres_Button setActive = {setActive} namePanel = {namePanel} setNamePanel = {setNamePanel} soundChange = {soundChange} setSoundChange = {setSoundChange} SoundTable = {SoundTable} />
            <Spheres_Panel />
        </div>
    )
}