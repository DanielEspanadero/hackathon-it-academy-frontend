import styled from "styled-components";

export const PokemonScreenStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh;
padding: 3rem 0.5rem;

.rock {
  background: linear-gradient(to bottom, #313030, #817c7c);
}
.electric {
  background: linear-gradient(to bottom, #6d640b, #fff200);
}
.bug {
  background: linear-gradient(to bottom, #6a762d, #cdfe0a);
}
.poison {
  background: linear-gradient(to bottom, #5c0c8a, #bf68e1);
}
.normal {
  background: linear-gradient(to bottom, #656565, #ffffff);
}
.fairy {
  background: linear-gradient(to bottom, #490339, #ff00f7);
}
.fire {
  background: linear-gradient(to bottom, #5d310d, #ff6a00);
}
.grass {
  background: linear-gradient(to bottom, #30762d, #12fe0a);
}
.water {
  background: linear-gradient(to bottom, #16386f, #00b3ff);
}
.ground{
  background: linear-gradient(to bottom, #623600, #ba7937);
}
.fighting{
  background: linear-gradient(to bottom, #373027, #b88757);
}
.psychic{
  background: linear-gradient(to bottom, #2a0026, #c519ae);
}
.ice{
  background: linear-gradient(to bottom, #004754, #02b7ff99);
}
.dragon{
  background: linear-gradient(to bottom, #000000, #ff9900);
}
.dark{
  background: linear-gradient(to bottom, #000000, #5d4176);
}
.steel{
  background: linear-gradient(to bottom, #323338, #7a7575);
}
.ghost{
  background: linear-gradient(to bottom, #3e1a46, #ff00b7);
}
.flying{
  background: linear-gradient(to bottom, #2c4d63, #a4e8ff);
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
  justify-content: space-between;
  padding: 1.5rem 0;
  margin: 2rem;
  /* border: 15px solid var(--cardborder); */
  border-radius: 1rem;
  min-width: 220px;
  height: 285px;
  text-align: center;
  /* box-shadow: 0 5px 25px 1px rgb(0 0 0 / 50%); */
  box-shadow:
  0 1.6px 1.6px rgba(0, 0, 0, 0.023),
  0 3.8px 3.8px rgba(0, 0, 0, 0.034),
  0 6.9px 6.9px rgba(0, 0, 0, 0.041),
  0 11.4px 11.4px rgba(0, 0, 0, 0.049),
  0 18.8px 18.8px rgba(0, 0, 0, 0.056),
  0 32.8px 32.8px rgba(0, 0, 0, 0.067),
  0 71px 71px rgba(0, 0, 0, 0.09)
;
  transition: all 0.2s ease-in-out;
}
h3 {
  margin-bottom: 0.2rem;
}
.thumb-container:hover {
  transform: scale(1.1);
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