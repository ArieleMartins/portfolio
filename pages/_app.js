import React from "react"
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../src/components/views/ColorMode";

const theme = {
    dark:{
        backgroundBase: '#111018',
        fontColor : 'white',
        backgroundContainer: '#111018',
        colorBorder: '#312F34',
        backCargo: '#312F34',
        backgroundTheme: "white",
        colorBallTheme:"#333333"
    },
    light:{
        backgroundBase: 'rgba(0 ,0 ,0 ,0.1)',
        fontColor: 'black',
        backgroundContainer: 'white',
        colorBorder: 'black',
        backCargo: 'black',
        backgroundTheme: '#333333',
        colorBallTheme: 'white'
    }

};

function ProviderWrapper(props){
    return(
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
    )
}


function MyApp({ Component, pageProps}){
    var contexto = React.useContext(ColorModeContext);
    return (
            <ThemeProvider theme={theme[contexto.mode]}>
                <CSSReset/>
                <Component {...pageProps}/>
            </ThemeProvider>
    )
}

export default function _App(props){
    return(
        <ProviderWrapper>
            <MyApp {...props}/>
        </ProviderWrapper>
    )
};