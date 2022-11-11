
import styled from "styled-components"
import StyledSobre  from "../styles/StyledSobre"
function Sobre(props){
    return (
        <>
        <StyledSobre>
        <section className="container-sobre" id="container-sobre">
                <div className="container-img-sobre">
                    <figure>
                        <img src={props.sobre.ilustration.href}
                            alt={props.sobre.ilustration.alt}/>
                    </figure>
                </div>
                <div className="container-text-sobre">
                    <h1>Sobre</h1>
                    <p className="objetivo">{props.sobre.objetivo}</p>
                    <p>{props.sobre.sobre}</p>
                </div>
            </section>
            <section className="container-formacao" id="container-formacao">
                <div className="formacao">
                    <h3>Formação</h3>
                    <ul>
                        <li>
                            <p>2020 - 2022</p>
                            <p>Senac</p>
                        </li>
                        <li>
                            Ensino Médio
                            <p>2014 - 2016</p>
                            <p>Lourival Gomes Machado</p>
                        </li>
                    </ul>
                </div>
                <div className="cursos">
                    <h3>Cursos</h3>
                    <ul>
                        <li className="atual">
                            Trilha Fundamentar - Fundamentar
                            <p>Atualmente</p>
                            <p>Rocketseat</p>
                        </li>
                        <li>
                            Trilha Conectar - Discover
                            <p>2022 - 2h23</p>
                            <p>Rocketseat</p>
                        </li>
                        <li>
                            Produções de Websites Expert - Front-End
                            <p>2021 - 100 horas</p>
                            <p>Senac</p>
                        </li>
                    </ul>
                </div>
            </section>
            </StyledSobre>
            </>
    )
}

export default Sobre