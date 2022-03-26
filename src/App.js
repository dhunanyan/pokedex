import AllPokemons from "./pages/all-pokemons/all-pokemons.component";

import "./App.css";

import { Main } from "./global.styles";

const App = () => {
  return (
    <Main>
      <AllPokemons />
    </Main>
  );
};

export default App;
// const getAllPokemons = async () => {
//   const PokemonsRes = await fetch(loadMore);
//   const PokemonsData = await PokemonsRes.json();

//   setLoadMore(PokemonsData.next);
//   getPokemon(PokemonsData.results);
// };

// const getPokemon = (results) => {
//   results.forEach(async (pokemon) => {
//     const pokemonRes = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
//     );
//     const pokemonData = await pokemonRes.json();

//     setPokemons((otherPokemons) => [...otherPokemons, pokemonData]);
//   });
// };
