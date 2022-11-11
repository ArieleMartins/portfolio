import styled from "styled-components"

const StyledMain = styled.main`
width: 341px;
height: 996px;
display: flex;
flex-direction: column;
background-color: ${({theme}) => theme.backgroundContainer};
border: 2px solid ${({theme}) => theme.colorBorder};
border-radius: 20px;
.container-tema{
    padding: 20px;
}

.container-info-perfil{
    display: flex;
    flex-direction: column;
    row-gap: 15px;
}

.container-perfil{
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 340px;
    padding: 0px 20px;
}

.container-perfil figure{
    max-width: 158px;
}

.container-perfil figure img {
    width: 100%;
    border-radius: 50%;
}
.nome {
    font-size: 26px;
    color: #C18C92;
}

.cargo {
    width: 289px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: ${({theme}) => theme.backCargo};
    color: white;
    border-radius: 20px;
    font-size: 13px;
    text-transform: uppercase;
}
.container-links{
    width: 100%;
    padding: 10px 20px;
    border-bottom:2px solid #312F34;
    border-top: 2px solid #312F34;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 45px;
}
.container-links a{
    color: ${({theme}) => theme.fontColor};
    text-decoration: none;
}
.container-links a:hover{
    color: #C18C92;   
}
.container-location{
    display: flex;
    column-gap: 10px;
}
.container-skills{
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding: 0px 20px;
}
.skill{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
}
.barra{
    width: 100%;
    height: 9px;
    background-color: #2b2a33;
    border-radius: 10px;
}
.progresso{
    width: 0%;
    height: 9px;
    border-radius: 10px;
    
}

.html, .css, .js, .git, .github, .php, .csharp, .python{
    background-color: #C18C92;
}
.html{
    animation: barraHtml ease-in-out 2s forwards;
}
.css{
    animation: barraCss ease-in-out 2s forwards;
}
.js{
    animation: barraJs ease-in-out 2s forwards;
}
.git{
    animation: barraGit ease-in-out 2s forwards;
}
.github{
    animation: barraGithub ease-in-out 2s forwards;
}
.php{
    animation: barraPhp ease-in-out 2s forwards;
}
.csharp{
    animation: barraCsharp ease-in-out 2s forwards;
}
.python{
    animation: barraPython ease-in-out 2s forwards;
}

@keyframes barraHtml{
    from{
        width: 0%;
    }
    to{
        width: 80%;
    }
}
@keyframes barraCss{
    from{
        width: 0%;
    }
    to{
        width: 60%;
    }
}
@keyframes barraJs{
    from{
        width: 0%;
    }
    to{
        width: 40%;
    }
}
@keyframes barraGit{
    from{
        width: 0%;
    }
    to{
        width: 20%;
    }
}
@keyframes barraGithub{
    from{
        width: 0%;
    }
    to{
        width: 60%;
    }
}
@keyframes barraPhp{
    from{
        width: 0%;
    }
    to{
        width: 15%;
    }
}
@keyframes barraCsharp{
    from{
        width: 0%;
    }
    to{
        width: 25%;
    }
}
@keyframes barraPython{
    from{
        width: 0%;
    }
    to{
        width: 10%;
    }
}
.container-email{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 15px 20px 0px 20px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #312F34;
}
.email{
    display: flex;
    column-gap: 10px;
    align-items: center;
}
.container-desenvolvedores{
    padding: 0px 20px;
    height: 60px;
    display: flex;
    border-top: 2px solid #312F34;
    align-items: center;
    justify-content: center;
}
.container-desenvolvedores p{
    font-size: 14px;
}

`;

export default StyledMain