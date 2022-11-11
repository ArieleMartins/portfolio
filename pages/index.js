import config from "../config.json"
import styled from "styled-components"
import Main from "../src/components/views/Main"
import Sobre from "../src/components/views/Sobre"
import Projetos from "../src/components/views/Projetos";

const StyleContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 25px 0px;

`
const StyleFlex = styled.div`
    width: 1002px;
    height: 900px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`
function HomePage(){
    return (
        <>
            
            <StyleContainer>
                <Main dados={config}/>
                <StyleFlex>
                    <Sobre sobre={config.sobre}/>
                    <Projetos projetos={config.projetos}/>
                </StyleFlex>
            </StyleContainer>
        </>
        
    );
}

export default HomePage





