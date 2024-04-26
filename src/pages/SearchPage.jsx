import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CardPokemon } from "../components";
import { PokemonContext } from "../context/PokemonContext";

export const SearchPage = () => {
  const location = useLocation();

  const { globalPokemons } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <div className="w-[1200px] mx-auto">
      <p className="mb-[30px] text-[22px]">
        Se encontraron <span className="font-bold">{filteredPokemons.length}</span> resultados:
      </p>
      <div className="grid grid-cols-4 gap-5 mx-auto max-w-7xl w-[1200px]">
        {filteredPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};
