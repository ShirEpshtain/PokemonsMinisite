import axios from 'axios';

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonForm {
  name: string;
  url: string;
}

export interface PokemonSprites {
  front_default: string;
}

export interface Pokemon {
  abilities: PokemonAbility[];
  base_experience: number;
  forms: PokemonForm[];
  sprites: PokemonSprites;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  id: any;
  name: string;
  url: string;
}

//response for the amount of the pokemons that will be desplied
export const getPokemons = async (limit: number): Promise<PokemonListResponse> => {
  try {
    const response = await axios.get<PokemonListResponse>(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemons:', error);
    throw error;
  }
};

// response for the deeper details about each pokemons as weight and height
export const getPokemonDetails = async (id: number): Promise<any> => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon details:', error);
    throw error;
  }
};
