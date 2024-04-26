import React, { useContext } from "react";
import { FilterBar, PokemonList } from "../components";
import { PokemonContext } from "../context/PokemonContext";

export const HomePage = () => {
  const { onClickLoadMore, active, setActive } = useContext(PokemonContext);

  return (
    <>
      <div className="flex w-[1200px] mx-auto">
        <div className="flex items-center gap-[15px] mb-5 cursor-pointer" onClick={() => setActive(!active)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-[30px] h-[30px] stroke-slate-500 font-extrabold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          <span>Filtrar</span>
        </div>
      </div>
      <PokemonList />
      <FilterBar />
      <div className="flex justify-center mb-5 mt-5 min-w-[1200px} mx-auto">
        <button className="bg-primary border-none py-[15px] px-10 text-white rounded-[10px] cursor-pointer hover:bg-primary-hover hover:text-black" onClick={onClickLoadMore}>
          Cargar más
        </button>
      </div>
    </>
  );
};
