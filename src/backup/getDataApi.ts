import { getPokemon } from '../generics/getPokemon';
getPokemon(4)
  .then((pokemon) => console.log(pokemon.name))
  .catch((error) => console.log(error))
  .finally(() => console.log('Final'));
