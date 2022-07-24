import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { IAllPokemons } from "../../interfaces/IAllPokemons"
import { PokemonScreenStyled } from "../../styles/pokedex/PokemonScreenStyled"
import { Pokemon } from "./Pokemon"
import { PokemonSearch } from "./PokemonSearch"

export const PokemonScreen = () => {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=649')
  
  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    const createPokemonObject = (results: object[]) => {
      results.forEach(async (pokemon: any) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemons((currentList: string[]): any => [...currentList, data])
        await allPokemons.sort((a: IAllPokemons, b: IAllPokemons) => a.id - b.id);
      });
    };
    createPokemonObject(data.results)
  };

  useEffect(() => {
    getAllPokemons()
  }, []);

  return (
    <PokemonScreenStyled>
      <h1 className="title">Pokedex</h1>
      {/* <PokemonSearch /> */}
        <div className="pokemonContainer">
          <div className="allContainer" onClick={() => console.log('Hola')}>
            {allPokemons.map((pokemonStats: any, index: any) =>
              <Pokemon
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
              />)}

          </div>
          {/* <button className="loadMore" onClick={() => getAllPokemons()}>Load more</button> */}
        </div>
    </PokemonScreenStyled>
  );
}