// PokemonDetails.tsx
import React from 'react';

interface PokemonDetailsProps {
  id: string;
  name: string;
  height: string;
  weight: string;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ id, name, height, weight }) => (
  <div>
    <h2>This is {`${name}`}</h2>
    <p>{`ID: ${id}`}</p>
    <p>{`Height: ${height}`}</p>
    <p>{`Weight: ${weight}`}</p>
  </div>
);

export default PokemonDetails;