import StyledHeader from "../styles/StyledHeader"
import React from "react"

function Header(props){

    return (
        <>
        <StyledHeader className="cabecalho">
                <nav className="menu">
                    <ul>
                        <li className="principal" id="principal"><a>Principal</a></li>
                        <li className="a-sobre" onClick={() => props.setVisible(false)}><a>Sobre</a></li>
                        <li className="a-projetos" onClick={() => props.setVisible(true)}><a>Projetos</a></li>
                    </ul>
                </nav>
        </StyledHeader>
        </>
    )
}

export default Header