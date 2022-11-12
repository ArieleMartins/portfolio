import StyledProjetos from '../styles/StyleProjetos'
import styled from "styled-components"

const StyledGridProjects = styled.div`
width: 1002px;
display:flex;
background-color: #111018;
border: 2px solid #312F34;
border-radius: 20px;
.container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 165px;
    row-gap: 20px;
    padding: 20px;
}
`

function Projetos(props){
    const listProjects = Object.keys(props.projetos)
    return (
        <StyledGridProjects id="container-projetos">
        <div className="container-grid" id="projetos-projeto">
            {listProjects.map((typeProject) => {
                const dadosProjeto = props.projetos[typeProject]
                return dadosProjeto.map((proj)=>{
                    return (
                        
                        <StyledProjetos className="container-projeto">
                            <div className="container-imagem">
                                <figure>
                                    <img src={proj.imagem}
                                            alt={proj.alt}/>
                                </figure>
                            </div>
                            <div className="container-desc-links">
                                <div className="tecnologias">
                                    <ul>
                                        <li className="hover width-html">
                                            <div className="tec-html"></div><span className="span hover-html">{proj.tec[0]}</span>
                                        </li>
                                        <li className="hover width-css">
                                            <div className="tec-css"></div><span className="span hover-css">{proj.tec[1]}</span>
                                        </li>
                                        <li className="hover width-js">
                                            <div className="tec-js"></div><span className="span hover-js">{proj.tec[2]}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="desc">
                                    <h3 className="nome-projeto">{proj.desc.name}</h3>
                                    <p>{proj.desc.desc}</p>
                                </div>
                                <div className="container-links">
                                    <div className="container-play">
                                        <a href={proj.href}
                                            target="_blank" className="play"><i className="fa-solid fa-play"></i></a>
                                    </div>
                                    <div className="container-github">
                                            <a href={proj.github}
                                                target="_blank" className="repo-github"><i className="fa-brands fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </StyledProjetos>    
                    )
                })
            })}
        </div>
        </StyledGridProjects>
    )
}

export default Projetos