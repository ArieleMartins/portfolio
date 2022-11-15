import StyledHeader from "../styles/StyledHeader"

function Header(props){

    return (
        <>
        <StyledHeader className="cabecalho">
                <nav className="menu">
                    <ul>
                        <li className="principal active" id="principal" onClick={() => principal(props)}><a>Principal</a></li>
                        <li className="a-sobre" onClick={() => sobre(props)}><a>Sobre</a></li>
                        <li className="a-projetos" onClick={() => projetos(props)}><a>Projetos</a></li>
                    </ul>
                </nav>
        </StyledHeader>
        </>
    )
}


async function principal(props){
    await props.setVisible(false)
    const principal = document.getElementById('c-principal')
    const menuPrincipal = document.querySelector('.principal')
    const sobre = document.getElementById('container-sobre')
    const formacao = document.querySelector('.container-formacao')
    const menuSobre = document.querySelector('.a-sobre')
    const menuProjetos = document.querySelector('.a-projetos')

    var largura = window.innerWidth

    if(largura <= 1314){
        sobre.style.display = "none"
        formacao.style.display = 'none'
        menuPrincipal.classList.add("active")
        menuSobre.classList.remove('active')
        menuProjetos.classList.remove('active')
        principal.style.display = 'flex'
    }
}
async function sobre(props){
    await props.setVisible(false)

    const principal = document.getElementById('c-principal')
    const menuPrincipal = document.querySelector('.principal')
    const sobre = document.getElementById('container-sobre')
    const formacao = document.querySelector('.container-formacao')
    const menuSobre = document.querySelector('.a-sobre')
    const menuProjetos = document.querySelector('.a-projetos')
    
    var largura = window.innerWidth

    if(largura <= 1314){
        
        sobre.style.display = "flex"
        formacao.style.display = 'flex'
        menuPrincipal.classList.remove("active")
        menuSobre.classList.add('active')
        menuProjetos.classList.remove('active')
        principal.style.display = 'none'
    }else{
        principal.style.display = 'flex'
    }
}

async function projetos(props){
    await props.setVisible(true)

    const principal = document.getElementById('c-principal')
    const menuPrincipal = document.querySelector('.principal')
    const menuSobre = document.querySelector('.a-sobre')
    const menuProjetos = document.querySelector('.a-projetos')

    var largura = window.innerWidth

    if(largura <= 1314){
        
        menuPrincipal.classList.remove("active")
        menuSobre.classList.remove('active')
        menuProjetos.classList.add('active')
        principal.style.display = 'none'

    }else{
        principal.style.display = 'flex'
    }
}

export default Header