import styled from "styled-components";

const StyledSobre = styled.section`
display: flex;
flex-direction: column;
row-gap: 15px;
.container-sobre {
    width: 1002px;
    height: 427px;
    display: flex;
    flex-direction: row;
    column-gap: 40px;
    align-items: center;
    justify-content: center;
}
.container-formacao {
    width: 664px;
    height: 300.3px;
}
.container-img-sobre figure{
    max-width: 340px;
}
.container-img-sobre figure img{
    width: 100%;
    animation: animacao 2s linear infinite;
}
.container-text-sobre{
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    text-align: justify;
}
.container-text-sobre p{
    width: 500px;
    line-height: 23px;
}
.container-text-sobre h1{
    border-left: 6px solid #9C354A;
    padding-left: 16px;
    height: 40px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size:25px;
}
.objetivo{
    color: #9C354A;
}

.container-formacao{
    display: flex;
    flex-direction: row;
    column-gap: 20px;
}
.formacao{
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    padding-left: 40px;
    height: 100%;
    row-gap: 10px;
    
}
.formacao ul, .cursos ul{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    color:#9C354A
}
.cursos{
    border-left: 2px solid #312F34;
    padding-left: 40px;
    height: 100%;
    display: flex;
    row-gap: 10px;
    flex-direction: column;
    justify-content: center;
}
.formacao p, .cursos p{
    color:${({theme}) => theme.fontColor};
    font-size: 14px;
    margin-left: 15px;
}
.atual{
    color:${({theme}) => theme.cursoFontColor};
}

@keyframes animacao{
    0%, 100%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(-20px);
    }
}
@media(max-width:1325px){
    .container-formacao, .container-sobre{
        display: none;
    }
    .container-sobre{
        flex-direction: column;
        width: 100%;
        height: 100%;
        column-gap: 0px;
        padding: 30px 0px;
        border-radius: 0;
        border-top: none;
        border-left: none;
        border-right: none;
        
    }
    .container-text-sobre p{
        width: 92vw;
        font-size: 13px;
    }
    .container-formacao{
        flex-direction: column;
        column-gap: 0;
        row-gap: 20px;
        height: 100%;
        width: 100vw;
        border-radius: 0;
        border-top: none;
        border-left: none;
        border-right: none;
        font-size: 14px;
    }
    .cursos{
        border-left: none;
        border-top: 2px solid #312F34;
        padding: 20px 40px;
    }
    .container-img-sobre figure{
        max-width: 300px;
    }
        
}

`

export default StyledSobre