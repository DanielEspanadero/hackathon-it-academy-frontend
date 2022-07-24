import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { PokemonSearchStyled } from "../../styles/pokedex/PokemonSearchStyled"

export const PokemonSearch = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange]: any = useForm({
        searchText: q
    });

    const { searchText }: any = formValues;

    const handleSearch = (e: any) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    };

  return (
    <PokemonSearchStyled>
          <form onSubmit={handleSearch}>
            <input 
                type="text" 
                placeholder="Busca a un pokemon..."
                  value={searchText}
                  onChange={handleInputChange}
            />
        </form>
    </PokemonSearchStyled>
  )
}
