import StyledMain from "../styles/StyleMain";

function Main(config){
    const dados = config.dados
    return (
        <StyledMain>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div >
                <div >

                </div>

            </div>
            <div className="container-info-perfil">
                <div className="container-perfil">
                    <figure>
                        <img src={`https://github.com/${dados.github}.png`} alt="Imagem de perfil do GitHub"/>
                    </figure>
                    <h2 className="nome">{dados.name}</h2>
                    <p className="cargo">{dados.job}</p>
                    <div className="container-location">
                        <i className="fa-solid fa-location-dot"></i><span>Brasil, São Paulo - SP</span>
                    </div>
                </div>
                <div className="container-links">
                   <a href="https://github.com/ArieleMartins" target="_blank"><i className="fa-brands fa-github-alt"
                            title="GitHub"></i></a>
                    <a href="https://www.linkedin.com/in/ariele-martins-b427541bb/" target="_blank" title="Linkedin"><i
                            className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://wa.me/11967949763" target="_blank" title="WhatsApp"><i
                            className="fa-brands fa-whatsapp"></i></a>
                </div>
                <div className="container-skills">
                <div className="skill">
                        <h5><span className="h">HTML</span> - 80%</h5>
                        <div className="barra">
                            <div className="progresso html">

                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <h5>CSS3 - 60%</h5>
                        <div className="barra">
                            <div className="progresso css">

                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <h5>Javascript - 40%</h5>
                        <div className="barra">
                            <div className="progresso js">

                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <h5>GIT - 20%</h5>
                        <div className="barra">
                            <div className="progresso git">

                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <h5>Github - 60%</h5>
                        <div className="barra">
                            <div className="progresso github">

                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <h5>PHP - 15%</h5>
                        <div className="barra">
                            <div className="progresso php">

                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <h5>Python - 10%</h5>
                        <div className="barra">
                            <div className="progresso python">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-email">
                    <div className="email">
                        <i className="fa-regular fa-envelope"></i><span>ariele.cmmelo@gmail.com</span>
                    </div>
                </div>
                <div className="container-desenvolvedores">
                    <p>2022 - Desenvolvido por Ariele Martins</p>
                </div>
            </div>
        </StyledMain>
    );
}

export default Main;