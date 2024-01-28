/// HomePage.tsx
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonCard from '../components/pokemonCards';
import PokemonDetails from '../components/pokemonDetails'; // Adjust the path accordingly
import { getPokemons, getPokemonDetails, PokemonListResponse, PokemonListItem } from '../services/PokemonService';

const HomePage: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonListResponse | null>(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [details, setDetails] = useState<{ id: string; name: string; height: string; weight: string } | null>(null);
  const history = useHistory();

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

  const handleMoreDetailsClick = async (id: number, name: string) => {
    setLoadingDetails(true);
    try {
      const detailsData = await getPokemonDetails(id);
      setDetails({
        id: String(id),
        name,
        height: String(detailsData.height),
        weight: String(detailsData.weight),
      });
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    } finally {
      setLoadingDetails(false);
    }
  };

  return (
    <div className="App">
      <h1>Pokémon List</h1>
      {pokemonList?.results.map((pokemon: PokemonListItem) => (
        <div key={pokemon.name}>
          <PokemonCard
            name={pokemon.name}
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
            onClickMoreDetails={(id: number, name: string) => handleMoreDetailsClick(id, name)}
          />
          {/* Render PokemonDetails only for the selected Pokemon */}
          {details && details.name === pokemon.name && (
            <PokemonDetails id={details.id} name={details.name} height={details.height} weight={details.weight} />
          )}
        </div>
      ))}
    </div>
  );
};

export default HomePage;