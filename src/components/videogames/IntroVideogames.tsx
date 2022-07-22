import { IntroVideogamesStyled } from "../../styles/videogames/IntroVideogamesStyled"

export const IntroVideogames = () => {
    return (
        <IntroVideogamesStyled>
            <h1 className="title">Videojuegos de Pokemon</h1>
            <img className="videogames" src="../../../assets/images/videogames/games2.jpeg" alt="videogames pokemon" />
            <p className="paragraph">Los videojuegos de Pokémon constituyen la parte fundamental de la franquicia Pokémon y comprenden todos los videojuegos lanzados al mercado desde sus inicios en 1996. Pokémon nació originalmente con la distribución de Pokémon Verde y Pokémon Rojo en Japón, el primer videojuego de la franquicia. A partir de los videojuegos surgieron las otras grandes ramas de Pokémon: anime, manga y Juego de Cartas Coleccionables Pokémon. Todavía hoy, son los videojuegos los que marcan la pauta dominante, de manera que las anteriores derivan su contenido de los videojuegos.</p>
        </IntroVideogamesStyled>
    )
}
