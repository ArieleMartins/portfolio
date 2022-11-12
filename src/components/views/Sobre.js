
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
                        <Formacao props={props.sobre.formacao}/>
                    </ul>
                </div>
                <div className="cursos">
                    <h3>Cursos</h3>
                    <ul>
                        <Cursos props={props.sobre.cursos}/>
                    </ul>
                </div>
            </section>
            </StyledSobre>
            </>
    )
}

function Formacao(props){
    return(
        props.props.map((formacao) =>{
            return(
                <li>
                    {formacao.curso}
                    <p>{formacao.periodo}</p>
                    <p>{formacao.instituicao}</p>
                </li>
            )
        })
    )
}

function Cursos(props){
    return(
        props.props.map((curso) =>{
                if(curso.curso == "Trilha Fundamentar - Discover"){
                    return(
                    <li className="atual">
                        {curso.curso}
                        <p>{curso.periodo}</p>
                        <p>{curso.instituicao}</p>
                    </li>
                    )
                }else{
                    return(
                        <li>
                            {curso.curso}
                            <p>{curso.periodo}</p>
                            <p>{curso.instituicao}</p>
                        </li>
                    )
                }
        })
    )
}


export default Sobre