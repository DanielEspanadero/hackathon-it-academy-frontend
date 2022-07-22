import styled from "styled-components";

export const HomeStyled = styled.div`
background-image: url('../../../assets/images/white-bg.jpg');
background-size: cover;
background-attachment: fixed;
width: 100%;
.title{
    font-size: 4rem;
    text-align: center;
    margin-top: 3rem;
    background: -webkit-linear-gradient(to right, #205cab, #fec30a);
    background: linear-gradient(to right, #205cab, #fec30a);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.pokedexLinkContainer{
    position: relative;
    z-index: 10;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .pokedexLink{
        padding: 2rem 0;
        filter:drop-shadow(5px 5px 5px #205cab);
    }
    .pokedexLink:hover{
        filter:drop-shadow(5px 5px 10px #f00);
    }
}
`;