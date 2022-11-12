import StyledHeader from "../styles/StyledHeader"

function Header(){
    return (
        <>
        <StyledHeader className="cabecalho">
                <nav className="menu">
                    <ul>
                        <li className="principal" id="principal"><a>Principal</a></li>
                        <li className="a-sobre" id="sobre"><a>Sobre</a></li>
                        <li className="a-projetos" id="projetos"><a>Projetos</a></li>
                    </ul>
                </nav>
        </StyledHeader>
        </>
    )
}

export default Header