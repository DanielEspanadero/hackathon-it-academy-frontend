import { Link, NavLink } from "react-router-dom"
import { isActiveBullbasaur, isActiveMeowth, isActivePikachu, isActiveSnorlax, NavStyled } from "../../styles/nav/NavStyled"

export const Nav = () => {
  return (
    <NavStyled>
      <Link
        to='/'
        className="navBrand"
      >
        <img className="pokeLogo" src="../../../assets/images/nav/pokemon.png" alt="Pokemon " />
      </Link>
      <div className="linksContainer">
        <NavLink
          to='/'
          style={
            ({ isActive }) => (
              isActive
                ? isActivePikachu
                : {}
            )
          }
          className='links'
          // className={({isActive}) =>
          //   "links" + (isActive ? "active" : "")
          // }
        >
          <img className="imagesNav" src="../../../assets/images/nav/pikachu.png" alt="pikachu" />
          <p className="linkText">Inicio</p>
        </NavLink>
        <NavLink
          to='/pokedex'
          style={
            ({ isActive }) => (
              isActive
                ? isActiveBullbasaur
                : {}
            )
          }
          className='links'
        >
          <img className="imagesNav" src="../../../assets/images/nav/bullbasaur.png" alt="bullbasaur" />
          <p className="linkText">Pokedex</p>
        </NavLink>
        <NavLink
          to='/videojuegos'
          style={
            ({ isActive }) => (
              isActive
                ? isActiveMeowth
                : {}
            )
          }
          className="links"
        >
          <img className="imagesNav" src="../../../assets/images/nav/meowth.png" alt="meowth" />
          <p className="linkText">Videojuegos</p>
        </NavLink>
        <NavLink
          to='/noticias'
          style={
            ({ isActive }) => (
              isActive
                ? isActiveSnorlax
                : {}
            )
          }
          className="links"
        >
          <img className="imagesNav" src="../../../assets/images/nav/snorlax.png" alt="snorlax" />
          <p className="linkText">Noticias</p>
        </NavLink>
      </div>
    </NavStyled>
  )
}
