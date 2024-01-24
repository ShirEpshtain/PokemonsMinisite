// src/services/PokemonService.ts

import axios from 'axios';

export interface Pokemon {
  name: string;
  url: string;
}

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemons = async (): Promise<Pokemon[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/?offset=0&limit=100`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokemons:', error);
    throw error;
  }
};
