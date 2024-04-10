import React, { Component, useEffect, useState } from "react";
import Logo from "./Sprites/Cubiki.gif"


export class Header extends Component {
    render() {
        return (
            <div className = "Header">
                <h3>Конкурс мультимедийных проектов "Моя профессия"</h3>
                <h1>
                    Моя будущая профессия...
                </h1>
                <img className = "Logo_Gif" src = {Logo} alt = "Чё-то сломалось,ща..." />
                <h4>Руководитель: Марулина Лариса Владимировна</h4>
                <h5>Создатель: Токмаков Илья Алексеевич</h5>
                <h6>Школа: 34 / Класс: "7А" </h6>
                <h2> И сейчас я вам про неё расскажу... </h2>
                <div className = "IT">
                    Про IT-специалиста
                </div>
            </div>
        )
    }
}

export default Header