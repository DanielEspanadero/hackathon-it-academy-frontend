import styled from "styled-components";

export const IntroHomeStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.charizard{
    width: 100%;
    height: 80vh;
    margin-top: 5rem;
    background-image: url('../../../assets/images/main/charizard.jpeg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}
.title{
    font-size: 5rem;
    margin-top: 3rem;
    background: -webkit-linear-gradient(to right, #205cab, #fec30a);
    background: linear-gradient(to right, #205cab, #fec30a);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.title2{
    font-size: 3rem;
    margin-top: 2rem;
    text-align: center;
}
.paragraph{
    width:80%;
    text-align: justify;
    font-size: 2rem;
    margin-top: 1rem;
}
.paragraph2{
    font-size: 2.5rem;
    margin-bottom:2rem;
}
.link{
    color: #555;
}
.link:hover{
    color:#205cab;
}
.apis{
    padding: 1rem 2rem;
    text-align: center;
    color: #fff;
    background-color: #0009;
    font-size: 2rem;
    margin-top: 1rem;
}
.imagesContainer{
    display: flex;
    justify-content: space-evenly;
    .images{
        width:25%;
    }
}
.pokeImg{
    width: 80%;
}
.list{
    display: block;
    font-size:2rem;
    margin-left: 10%;
    .listElement{
        text-align: left;
    }
}
`;