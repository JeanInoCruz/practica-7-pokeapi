import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import logo from "../assets/Pokédex_logo.png";

export const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(PokemonContext);

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });

    onResetForm();
  };

  return (
    <>
      <header className="flex items-center justify-between py-10 w-[1200px] mx-auto">
        <Link to="/" className="w-[150px]">
          <img
            src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
            alt="Logo Pokedex"
          />
        </Link>

        <form className="flex items-center gap-[15px]" onSubmit={onSearchSubmit}>
          <div className="flex items-center gap-[10px] border border-gray-500 rounded-3xl px-5 py-[15px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 stroke-slate-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
            className="w-[300px] border-none outline-none text-base font-medium"
              type="search"
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Buscar nombre de pokemon"
            />
          </div>

          <button className="text-white font-semibold border-none outline-none bg-primary cursor-pointer rounded-3xl py-[15px] px-[30px] tracking-wide hover:bg-primary-hover hover:text-black">Buscar</button>
        </form>
      </header>

      <Outlet />
    </>
  );
};
