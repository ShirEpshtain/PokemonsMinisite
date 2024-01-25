import React from 'react';

interface PokemonCardProps {
  name: string;
  imageUrl: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl }) => (
  <div className="pokemon-card">
    <img src={imageUrl} alt={name} />
    <p>{name}</p>
  </div>
);

export default PokemonCard;




