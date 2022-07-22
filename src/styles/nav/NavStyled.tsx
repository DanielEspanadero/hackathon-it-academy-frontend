import styled from "styled-components";

export const NavStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 20vh;
border-bottom: 2px inset #0006;
.navBrand{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    height: 100%;
    .pokeLogo{
        width: 100%;
    }
}
.linksContainer{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 80%;
    .links{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        margin-right: 2rem;
        width: 15%;
        height: 100%;
        .imagesNav{
            width: 40%;
            transition: all .5s;
        }
        .linkText{
            display: none; 
            color: #fec30a;
            text-shadow: 2px 2px 2px #205cab;
        }
    }
    .links:hover{
        padding-bottom: 0;
        .imagesNav{
            filter:drop-shadow(5px 5px 5px #205cab);
        }
        .linkText{
            display: inline-block; 
        }
    }
}
`;

export const isActivePikachu = {
    borderBottom: '5px solid #fecd0a',
    paddingBottom: '.5rem'
};

export const isActiveBullbasaur = {
    borderBottom: '5px solid #1b7f15',
    paddingBottom: '.5rem'
};

export const isActiveMeowth = {
    borderBottom: '5px solid #26292c',
    paddingBottom: '.5rem'
};

export const isActiveSnorlax = {
    borderBottom: '5px solid #0f488c',
    paddingBottom: '.5rem'
};