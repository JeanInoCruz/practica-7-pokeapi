import React from "react";
import { Link } from "react-router-dom";

export const CardPokemon = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="cursor-pointer">
      <div className="bg-[#f2f2f2] flex items-center justify-center rounded-[5px] h-[250px]">
        <img
        className="w-full h-full"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
      </div>
      <div className="p-[15px]">
        <span className="block text-[#888] mb-[15px]">N° {pokemon.id}</span>
        <h3 className="text-[#333]">{pokemon.name}</h3>
        <div className="flex gap-[10px] mt-[10px]">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className={`bg-${type.type.name} text-xs py-[5px] px-5 rounded-md text-white`}
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
