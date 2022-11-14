import styled from "styled-components";

const StyledHeader = styled.header`
width: 1002px;
height: 56px;

.principal{
    display: none;
}

.menu ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 56px;
    align-items: center;
    list-style: none;
    
}
.menu ul li a{
    color:${(theme) => theme.fontColor};
    text-decoration: none;
    cursor: pointer;
    
}
.menu ul li a:hover{
    color: #C18C92;
}

@media(max-width:1325px){
    width: 100%;
    border-radius: 0 !important;
    background-color:#353535 !important;
    border:none !important;
    font-size: 13px;
    padding: 0;

    .principal{
        display: flex;
        background-color: #111018;
    }

    .menu{
        width: 100vw;
    }
    .menu ul {
        align-items: flex-end;
        justify-content: space-between;
        width: 100vw;
    }
    .principal:not(.active),.a-sobre:not(.active), .a-projetos:not(.active){
        background-color: ${({theme}) => theme.mediaBackgroundColor} !important;
    }
    .principal.active,.a-sobre.active, .a-projetos.active{
        background-color: ${({theme}) => theme.mediaBackgroundColorActive} !important;
    }
    .menu ul li{
        height: 46px;
        padding: 10px 25px;
        display: flex;
        align-items: center;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    } 
    .menu ul li:not(.active){
        color:${({theme}) => theme.mediaFontColor};
    
    }
    .menu ul li.active{
        color:${({theme}) => theme.mediaFontColorActive} ;
    }
}


`

export default StyledHeader