import styled from "styled-components";

export const NewsStyled = styled.div`
text-align: center;
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
    font-size: 2rem;
    margin-top: 1rem;
}
.image1{
    width:100%;
    height: 100vh;
    background-image: url('../../../assets/images/news/wallpaper.jpeg');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
}
`