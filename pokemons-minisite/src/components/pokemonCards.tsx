// Import necessary modules
import React, { useState } from 'react';
import { PokemonListItem, getPokemonDetails } from '../services/PokemonService';

// Define the PokemonCardProps interface
interface PokemonCardProps {
  name: string;
  imageUrl: string;
  onClickMoreDetails: (id: number, name: string) => Promise<void>; // Updated type
}

// Define the PokemonCard component
const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl, onClickMoreDetails }) => {
  // State for loading details
  const [loadingDetails, setLoadingDetails] = useState(false);

  // Function to handle "More Details" button click
  const handleMoreDetailsClick = async () => {
    setLoadingDetails(true);
    try {
      // Extract Pokemon ID from the image URL
      const match = /\/(\d+)(?:\.png|$)/.exec(imageUrl);
      if (match && match[1]) {
        const pokemonId = parseInt(match[1], 10);
        // Call the parent component's onClickMoreDetails function
        await onClickMoreDetails(pokemonId, name);
      } else {
        console.error('Unable to extract Pokemon ID from URL:', imageUrl);
      }
    } finally {
      setLoadingDetails(false);
    }
  };

  // Render the PokemonCard component
  return (
    <div className="pokemon-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <button onClick={handleMoreDetailsClick} disabled={loadingDetails}>
        {loadingDetails ? 'Loading...' : 'More Details'}
      </button>
    </div>
  );
};

// Export the PokemonCard component
export default PokemonCard;

