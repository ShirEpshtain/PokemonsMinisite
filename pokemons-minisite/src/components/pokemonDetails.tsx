import React from 'react';
import './pokemonDetails.scss';

interface PokemonDetailsProps {
  name: string;
  imageUrl: string;
  // Add more details as needed
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ name, imageUrl }) => (
  <div className="pokemon-details">
    <img src={imageUrl} alt={name} />
    <p>{name}</p>
    {/* Add more details rendering */}
  </div>
);

export default PokemonDetails;