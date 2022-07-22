import styled from "styled-components";

export const FooterStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 80px;
background-color: #181818;
color: #fff;
.created{
    font-size: 1.5rem;
    text-align: center;
    .link{
        color: #999;
    }
    .link:hover{
    color: #666;
    }
}
`