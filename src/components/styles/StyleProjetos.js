import styled from "styled-components"

const StyledProjetos = styled.div`
.container-projetos {
    width: 1002px;
    display:flex
}

.container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 165px;
    padding: 20px;
}

.container-imagem figure {
    width: 398px;
    height: 220px;
    border-right: 2px solid #312F34;
    border-left: 2px solid #312F34;
    border-top: 2px solid #312F34;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}

.container-imagem figure img {
    width: 100%;
    border-top-left-radius: 17px;
    border-top-right-radius: 17px;
}

.container-projeto {
    width: 398px;
    height: 450px;
}

.container-desc-links {
    width: 398px;
    height: 210px;
    border-radius: 0px 0px 20px 20px;
    display: flex;
    flex-direction: column;

}

.tecnologias {
    display: flex;
    width: 100%;
    height: 30px;
    align-items: center;
    justify-content: end;
    padding-top: 10px;
}

.tecnologias ul {
    display: flex;
    column-gap: 10px;
    width: 230px;
    float: right;
    list-style: none;
    justify-content: end;
    padding-right: 20px;
    font-size: 13px;
}

.tec-html {
    background-color: #DA764B;
}

.tec-css {
    background-color: #6476D6;
}

.tec-js {
    background-color: #ceb24f;
}

.tecnologias ul li {
    display: flex;
    column-gap: 5px;
}

.tec-css,
.tec-js,
.tec-html {
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

.span {
    width: 0px;
    display: none;

}

.desc {
    height: 120px;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.desc p {
    font-size: 14px;
}

.hover {
    width: 27px;
    transition: width 1s linear;
    display: flex;
    align-items: center;
}

.width-css:hover {
    width: 55px;

}

.width-html:hover {
    width: 60px;
}

.width-js:hover {
    width: 40px;
}

.hover:hover .hover-css,
.hover:hover .hover-html,
.hover:hover .hover-js {
    display: block;
}

.nome-projeto {
    color: #9C354A;
}

.container-links {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
}

.container-links .container-play .play {
    padding: 7px 30px;
    height: 40px;
    border: 2px solid #9C354A;
    border-radius: 20px;
    color: #9C354A;
    font-size: 18px;
    float: right;
    margin-right: 30px;
    text-decoration: none;
}

.container-play {
    width: 70%;
}

.container-github {
    display: flex;
    align-items: center;
}

.repo-github {
    height: 40px;
    padding: 7px 10px;
    font-size: 18px;
    border: 2px solid #9C354A;
    text-decoration: none;
    color: #9C354A !important;
    border-radius: 50%;
}

.repo-github:hover , .play:hover{
    border-color: #be4860 !important;
    color: #be4860 !important;
    box-shadow: inset 0 0 6px rgb(196, 77, 101), 0 0 25px rgb(196, 77, 101);
    text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.3), 0 0 29px rgb(196, 77, 101);
}

`

export default StyledProjetos