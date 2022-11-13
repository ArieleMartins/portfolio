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
    width: 100vw;
    border-radius: 0;
    background-color:#353535;
    border:none;
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
    .a-sobre, .a-projetos{
        background-color: #474747;
    }
    .menu ul li{
        height: 46px;
        padding: 10px 25px;
        display: flex;
        align-items: center;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    } 

}


`

export default StyledHeader