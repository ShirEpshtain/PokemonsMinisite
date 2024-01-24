import React from 'react';
import './pokemonCards.scss';

// create an interface for each pokemon
interface PokemonCardProps {
  name: string;
  imageUrl: string;
  onClick: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl, onClick }) => (
  <div className="pokemon-card" onClick={onClick}>
    <img src={imageUrl} alt={name} />
    <p>{name}</p>
  </div>
);

export default PokemonCard;