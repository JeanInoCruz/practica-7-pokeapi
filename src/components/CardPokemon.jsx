import React from "react";
import { Link } from "react-router-dom";

export const CardPokemon = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="cursor-pointer">
      <div className="card-img">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
      </div>
      <div className="card-info">
        <span className="pokemon-id">N° {pokemon.id}</span>
        <h3>{pokemon.name}</h3>
        <div className="card-types">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className={`rounded-none bg-${type.type.name}`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
	  {/* solo para cargar los colores */}
      {/* <div className="bg-fire bg-grass bg-steel bg-water bg-psychic bg-ground bg-ice bg-flying bg-ghost bg-normal bg-poison bg-rock bg-fighting bg-dark bg-bug bg-dragon bg-electric bg-fairy bg-fairy bg-shadow bg-unknow bg-primary bg-primary-hover "></div> */}
    </Link>
  );
};
