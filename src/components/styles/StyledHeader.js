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
    color:white;
    text-decoration: none;
    cursor: pointer;
    
}
.menu ul li a:hover{
    color: #C18C92;
}

`

export default StyledHeader