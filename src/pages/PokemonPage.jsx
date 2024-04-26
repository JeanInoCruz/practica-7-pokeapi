import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components";
import { PokemonContext } from "../context/PokemonContext";
import { primerMayuscula } from "../helper/helper";

export const PokemonPage = () => {
  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <main className="w-[1200px] mx-auto flex flex-col mt-[100px] mb-[50px]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-5 flex items-center relative">
            <span className="absolute flex items-center top-[-130px] bottom-[286px] left-0 font-bold text-primary-hover text-[200px]">#{pokemon.id}</span>
            <div className="order-2 flex-[1] pt-[25px] pr-[25px] pb-[25px] h-[400px]">
              <img
              className="box-border h-full w-full"
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`Pokemon ${pokemon?.name}`}
              />
            </div>

            <div className="flex flex-col order-1 flex-[1]">
            
              <h1 className="text-right text-6xl">{primerMayuscula(pokemon.name)}</h1>
              <div className="flex gap-[10px] mt-[10px] info-pokemon-type">
                {pokemon.types.map((type) => (
                  <span key={type.type.name} className={`bg-${type.type.name} text-xs py-[5px] px-5 rounded-md text-white`}>
                    {type.type.name}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-5">
                <div className="flex flex-col gap-[10px]">
                  <p className="font-bold text-[20px]">Altura</p>
                  <span>{pokemon.height}</span>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p className="font-bold text-lg">Peso</p>
                  <span>{pokemon.weight}KG</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-12 items-center">
            <h1>Estadísticas</h1>
            <div className="flex flex-col gap-5 flex-[1]">
              <div className="flex items-center gap-5">
                <span className="flex-[20%] font-medium text-lg">Hp</span>
                <div className="bg-primary w-full h-[30px] rounded-[10px]"></div>
                <span className="flex-[20%] font-medium text-lg">
                  {pokemon.stats[0].base_stat}
                </span>
              </div>
              <div className="flex items-center gap-5">
                <span className="flex-[20%] font-medium text-lg">Attack</span>
                <div className="bg-primary w-full h-[30px] rounded-[10px]"></div>
                <span className="flex-[20%] font-medium text-lg">
                  {pokemon.stats[1].base_stat}
                </span>
              </div>
              <div className="flex items-center gap-5">
                <span className="flex-[20%] font-medium text-lg">Defense</span>
                <div className="bg-primary w-full h-[30px] rounded-[10px]"></div>
                <span className="flex-[20%] font-medium text-lg">
                  {pokemon.stats[2].base_stat}
                </span>
              </div>
              <div className="flex items-center gap-5">
                <span className="flex-[20%] font-medium text-lg">Special Attack</span>
                <div className="bg-primary w-full h-[30px] rounded-[10px]"></div>
                <span className="flex-[20%] font-medium text-lg">
                  {pokemon.stats[3].base_stat}
                </span>
              </div>
              <div className="flex items-center gap-5">
                <span className="flex-[20%] font-medium text-lg">Special Defense</span>
                <div className="bg-primary w-full h-[30px] rounded-[10px]"></div>
                <span className="flex-[20%] font-medium text-lg">
                  {pokemon.stats[4].base_stat}
                </span>
              </div>
              <div className="flex items-center gap-5">
                <span className="flex-[20%] font-medium text-lg">Speed</span>
                <div className="bg-primary w-full h-[30px] rounded-[10px]"></div>
                <span className="flex-[20%] font-medium text-lg">
                  {pokemon.stats[5].base_stat}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};
