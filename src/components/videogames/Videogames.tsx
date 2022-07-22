import { VideogamesStyled } from "../../styles/videogames/VideogamesStyled"
import { IntroVideogames } from "./IntroVideogames"

export const Videogames = () => {
  return (
    <VideogamesStyled>
      <IntroVideogames />
      <img className="allGames" src="../../../assets/images/videogames/games.png" alt="all pokemon games" />
    </VideogamesStyled>
  )
}
