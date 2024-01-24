// src/pages/HomePage.tsx

import React, { useEffect, useState } from 'react';
import { getPokemons, Pokemon } from '../services/PokemonService';
import PokemonCard from '../components/pokemonCards';
import PokemonDetails from '../components/pokemonDetails';
//import './HomePage.scss';

interface HomePageProps {}

interface PokemonDetailsProps {
  name: string;
  imageUrl: string;
}

const HomePage: React.FC<HomePageProps> = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await getPokemons();
        setPokemons(data);
      } catch (error) {
        // Handle error
      }
    };

    fetchPokemons();
  }, []);

  const handlePokemonClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="home-page">
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            imageUrl={`https://pokeapi.co/media/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
            onClick={() => handlePokemonClick(pokemon)}
          />
        ))}
      </div>
      {selectedPokemon && (
        <PokemonDetails
          name={selectedPokemon.name}
          imageUrl={`https://pokeapi.co/media/sprites/pokemon/${selectedPokemon.url.split('/')[6]}.png`}
        />
      )}
    </div>
  );
};

export default HomePage;
