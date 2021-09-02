import axios from 'axios';
import { Pokemon } from '../interface/';

export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  const { data } = await axios.get<Pokemon>( // Le decimos que en la respuesta usara la interface mas no que la resp de la promesa va a cambiar
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  // console.log(resp.data.name)
  return data;
};
