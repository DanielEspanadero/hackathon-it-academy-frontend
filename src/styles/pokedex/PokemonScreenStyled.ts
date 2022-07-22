import styled from "styled-components";

export const PokemonScreenStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh;
padding: 3rem 0.5rem;
.rock {
  background-color: rgb(148, 81, 81);
}
.ghost {
  background-color: rgb(247, 247, 247);
}
.electric {
  background-color: rgb(255, 255, 161);
}
.bug {
  background-color: #F6D6A7;
}
.poison {
  background-color: #e0a7f6;
}
.normal {
  background-color: #F4F4F4;
}
.fairy {
  background-color: rgba(255, 192, 203, 0.863);
}
.fire {
  background-color: #FBE3DF;
}
.grass {
  background-color:#E2F9E1;
}
.water {
  background-color:#E0F1FD;
}
.pokemonContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.allContainer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.thumb-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0 ;
  margin: 0.3rem;
  border: 1px solid #efefef;
  border-radius: 0.2rem;
  min-width: 160px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
}
h3 {
  margin-bottom: 0.2rem;
}
.thumb-container .number {
  border-radius: 1rem;
  padding: 0.2rem 0.4rem;
  background-color: rgba(255,255,255,0.3);
}
.thumb-container img {
  width: 120px;
  height: 120px;
}
.thumb-container small {
  text-transform: capitalize;
}
.detail-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.detail-wrapper button {
  color: rgb(22, 22, 22);
  padding: .5rem;
  margin-top: 1rem;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.185);
}
.loadMore {
  background: #f5f5f5 linear-gradient(#f5f5f5,#f1f1f1) repeat-x;
  border-radius: 2px;
  border: 1px solid #c6c6c6;
  color: #444;
  padding: 0.5rem 1.5rem;
  min-width: 50%;
  margin-top: 1rem;
}
`