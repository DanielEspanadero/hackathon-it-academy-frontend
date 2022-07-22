import { IntroHomeStyled } from "../../styles/home/IntroHomeStyled"

export const IntroHome = () => {
    return (
        <IntroHomeStyled>
            <h1 className="title">Decathlon & IT Academy Hackathon - Frontend</h1>
            <p className="paragraph paragraph2">Esta web forma parte de el reto clasificatorio para la final de la hackathon <a href='https://www.decathlon.es/es/' target='_BLANK'>Decathlon</a> & <a href='https://cibernarium.barcelonactiva.cat/it-academy/inscripcio' target='_BLANK'>IT Academy</a> organizado por <a href='https://nuwe.io' target='_BLANK'>Nuwe</a> que se celebrará en el cibernarium de Barcelona el día 26 de julio de 2022.</p>
            <div className="imagesContainer">
                <img className="images" src="../../../assets/images/main/decathlon.png" alt="decathlon" />
                <img className="images" src="../../../assets/images/main/IT.png" alt="IT Academy" />
                <img className="images" src="../../../assets/images/main/nuwe.png" alt="Nuwe" />
            </div>
            <h2 className="title">Descripción del reto</h2>
            <h3 className="title2">🌌 Background</h3>
            <p className="paragraph">
                Una de las habilidades más básicas a nivel de front-end es poder consumir API REST y mostrar al usuario los datos que provee el servidor de forma visual y ordenada

                El cuarto reto a nivel de front-end consiste en implementar una web que consuma una API pública de internet como:</p>
            <p className="apis">
                API de Pokémons: https://pokeapi.co <br />
                API de Rick i Morty: https://rickandmortyapi.com
            </p>

            <p className="paragraph">Aquí tienes una posible idea de lo que se puede llegar a implementar con la primera API mencionada. La idea es utilizar las imágenes y los datos que nos da el servidor y mapearlos a componentes de una web para que lo consuma el usuario.</p>
            <p className="paragraph">Esta sería la principal:</p>
            <img className="pokeImg" src="../../../assets/images/main/01.png" alt="imagen de pokemon" />
            <p className="paragraph">Al hacer clic en una de las cartas tendríamos lo siguiente:</p>
            <img className="pokeImg" src="../../../assets/images/main/02.png" alt="imagen de pokemon" />
            <p className="paragraph">Adicionalmente es necesario implementar una manera de filtrar los datos obtenidos de la API, en este caso en concreto hemos hecho un filtro por nombre y por el tipo de Pokémon.</p>
            <p className="paragraph">Si rellenamos el cuadro de texto aparecen sólo las coincidencias dentro de los nombres de los Pokémon mostrados:</p>
            <img className="pokeImg" src="../../../assets/images/main/03.png" alt="imagen de pokemon" />
            <p className="paragraph">Por otro lado también podemos filtrar por el tipo de Pokémon presionando los botones con los tipos que se muestran sobre las cartas:</p>
            <img className="pokeImg" src="../../../assets/images/main/04.png" alt="imagen de pokemon" />
            <p className="paragraph">Como podemos ver en este caso, se filtran todos los Pokémon de tipo veneno que se descargan de la API.</p>
            <div>
                <h3 className="title2">✅ Objetivos a implementar:</h3>
                <ul className="list">
                    <li className="listElement">Ser capaz de hacer peticiones de forma satisfactoria a la API y obtener los datos que se quieran mostrar al usuario.</li>
                    <li className="listElement">Utilizar los datos para crear componentes de la web y mostrarlos al usuario, cuyo diseño es libre.</li>
                    <li className="listElement">Al hacer clic en una de las cartas deberíamos navegar a otra ruta donde obtener algo de información extra de lo que sea que se haya clicado en la página principal, lo que mostrar también es libre escoger.</li>
                    <li className="listElement">La vista que aparezca a partir del clic en las cartas, debe tener un botón para volver a la página principal.</li>
                    <li className="listElement">Implementar una forma de filtrar los datos.</li>
                    <li className="listElement">Implementar una barra de búsqueda</li>
                </ul>
                <h3 className="title2">🚚 Entrega</h3>
                <ul className="list">
                    <li className="listElement">Entregar el link al proyecto de Github.</li>
                    <li className="listElement">La solución debe estar hecha con React, Angular o Vue.</li>
                </ul>
                <h3 className="title2">🧐 Corrección</h3>
                <ul className="list">
                    <li className="listElement">Se mirarán los objetivos implementados.</li>
                    <li className="listElement">Se mirará si se ha dividido la lógica por componentes de forma coherente.</li>
                    <li className="listElement">Se mirará si el proyecto contiene un README con la información básica para trabajar con el proyecto y que siga: <a href="https://www.makeareadme.com" target='_BLANK'>https://www.makeareadme.com</a>.</li>
                </ul>
            </div>
        </IntroHomeStyled>
    )
}
