import config from "../config.json"
import styled from "styled-components"

var estilo = {color:"blue", backgroundColor: 'red'};

function HomePage(){
    return (
        <div>
            <Main/>
        </div>
    );
}

export default HomePage

const StyledMain = styled.main`
    width: 341px;
    height: 996px;
    display: flex;
    flex-direction: column;
    background-color: #111018;
    border: 2px solid #312F34;
    border-radius: 20px;
    color:white;

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

`;

function Main(){
    return (
        <StyledMain>
            <div >
                <div >
                    <i class="fa-regular fa-sun" id="icon-sun"></i>
                    <div>
                    </div>
                    <i class="fa-solid fa-moon" id="icon-moon"></i>
                </div>

            </div>
            <div className="container-info-perfil">
                <div className="container-perfil">
                    <figure>
                        <img src={`https://github.com/${config.github}.png`} alt="Imagem de perfil do GitHub"/>
                    </figure>
                    <h2 >{config.name}</h2>
                    <p >{config.job}</p>
                    <div className="container-location">
                        <i class="fa-solid fa-location-dot"></i><span>Brasil, São Paulo - SP</span>
                    </div>
                </div>
                <div className="container-links">
                    <a href="https://github.com/ArieleMartins" target="_blank"><i class="fa-brands fa-github-alt"
                            title="GitHub"></i></a>
                    <a href="https://www.linkedin.com/in/ariele-martins-b427541bb/" target="_blank" title="Linkedin"><i
                            class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://wa.me/11967949763" target="_blank" title="WhatsApp"><i
                            class="fa-brands fa-whatsapp"></i></a>
                </div>
                <div className="container-skills">
                    <div className="container-skill">
                        <h5><span >HTML</span> - 80%</h5>
                        <div >
                            <div >

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-email">
                    <div >
                        <i class="fa-regular fa-envelope"></i><span>ariele.cmmelo@gmail.com</span>
                    </div>
                </div>
                <div >
                    <p>2022 - Desenvolvido por Ariele Martins</p>
                </div>
            </div>
        </StyledMain>
    );
}