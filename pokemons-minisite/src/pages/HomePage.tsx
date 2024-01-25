import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/pokemonCards';
import { getPokemons, getPokemon, Pokemon, PokemonListResponse, PokemonListItem } from '../services/PokemonService';

const HomePage: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonListResponse | null>(null);
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await getPokemons(100); 
        setPokemonList(data);
      } catch (error) {
        console.error('Error fetching Pokemons:', error);
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    const fetchPokemonData = async (url: string) => {
      try {
        const data = await getPokemon(url);
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    if (pokemonList && pokemonList.results.length > 0) {
      const firstPokemonUrl = pokemonList.results[0].url;
      fetchPokemonData(firstPokemonUrl);
    }
  }, [pokemonList]);

  return (
    <div className="App">
      <h1>Pokémon List</h1>
      {pokemonList?.results.map((pokemon: PokemonListItem) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
        />
      ))}
    </div>
  );
};

export default HomePage;

