import { Link } from "react-router-dom"
import { HomeStyled } from "../../styles/home/HomeStyled"
import { IntroHome } from "./IntroHome"

export const Home = () => {
  return (
    <HomeStyled>
      <IntroHome />
      <div>
        <h2 className="title">La resolución del reto está en la vista de la pokedex:</h2>
        <div className="pokedexLinkContainer">
          <Link
            to='/pokedex'
            className="pokedexLink"
          >
            <img src="../../../assets/images/main/pokedex.webp" alt="pokedex" />
          </Link>
        </div>
      </div>
    </HomeStyled>
  )
}
