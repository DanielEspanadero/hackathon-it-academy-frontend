import styled from "styled-components";

export const IntroVideogamesStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
.title{
    font-size: 5rem;
    margin-top: 3rem;
    background: -webkit-linear-gradient(to right, #205cab, #fec30a);
    background: linear-gradient(to right, #205cab, #fec30a);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.paragraph{
    width:80%;
    text-align: justify;
    font-size: 2.5rem;
    margin: 1rem;
}
`;