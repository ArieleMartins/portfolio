
import React from "react";
import StyleSwitch from '../styles/StyleSwitch'
import { ColorModeContext } from "./ColorMode";

export default function DarkModeSwitch() {
    const contexto = React.useContext(ColorModeContext)
    return (
        <StyleSwitch>
            <input id="darkmode" type="checkbox" onChange={() => {
                if(contexto.mode === 'dark'){
                    contexto.setMode('light')
                }else{
                    contexto.setMode('dark')
                }
            }} />
            <label
                htmlFor="darkmode"
                className="darkmode-switch"
            >
                <span>🌞</span>
                <span>🌑</span>
            </label>
        </StyleSwitch>
    )
}