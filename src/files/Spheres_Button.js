import React, { useRef, useState } from "react";
import { TiTimes } from "react-icons/ti";

export default function Spheres_Button( {setActive, namePanel, setNamePanel, soundChange, setSoundChange, SoundTable} ) {
    const ref = useRef(null)

    return (
        <div className = "Buttons" onClick = {() => ref.current?.scrollIntoView({behavior: "smooth"})}>
            <div ref  = {ref} className = "References">
                r
            </div>
            <h1>
                <TiTimes onClick = {() => setActive(true) > setNamePanel(namePanel = "Start") > setSoundChange(soundChange = SoundTable[0])} onMouseEnter = {() => document.getElementById("h11").style.opacity = 1} onMouseLeave = {() => document.getElementById("h11").style.opacity = 0} /> 
            </h1>
            <h2>
                <TiTimes onClick = {() => setActive(true) > setNamePanel(namePanel = "Game") > setSoundChange(soundChange = SoundTable[1])} onMouseEnter = {() => document.getElementById("h22").style.opacity = 1} onMouseLeave = {() => document.getElementById("h22").style.opacity = 0}/>
            </h2>
            <h3>
                <TiTimes onClick = {() => setActive(true) > setNamePanel(namePanel = "Web") > setSoundChange(soundChange = SoundTable[2])} onMouseEnter = {() => document.getElementById("h33").style.opacity = 1} onMouseLeave = {() => document.getElementById("h33").style.opacity = 0}/>
            </h3>
            <h4>
                <TiTimes onClick = {() => setActive(true) > setNamePanel(namePanel = "Cyber") > setSoundChange(soundChange = SoundTable[3])} onMouseEnter = {() => document.getElementById("h44").style.opacity = 1} onMouseLeave = {() => document.getElementById("h44").style.opacity = 0}/>
            </h4>
            <h5>
                <TiTimes onClick = {() => setActive(true) > setNamePanel(namePanel = "Data") > setSoundChange(soundChange = SoundTable[4])} onMouseEnter = {() => document.getElementById("h55").style.opacity = 1} onMouseLeave = {() => document.getElementById("h55").style.opacity = 0}/>
            </h5>
            <h6>
                <TiTimes onClick = {() => setActive(true) > setNamePanel(namePanel = "Software") > setSoundChange(soundChange = SoundTable[5])} onMouseEnter = {() => document.getElementById("h66").style.opacity = 1} onMouseLeave = {() => document.getElementById("h66").style.opacity = 0}/>
            </h6>
            <test className = "test">
                <TiTimes onClick = {() => setActive(true) > setNamePanel(namePanel = "Test")} onMouseEnter = {() => document.getElementById("h77").style.opacity = 1} onMouseLeave = {() => document.getElementById("h77").style.opacity = 0}/>
            </test>
        </div>
    )
}