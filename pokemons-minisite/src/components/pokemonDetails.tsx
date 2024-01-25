// // PokemonDetails.tsx

// import React from 'react';

// interface PokemonDetailsProps {
//   pokemon: {
//     name: string;
//     height: number;
//     weight: number;
//   };
// }

// const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => (
//   <div>
//     <h2>{pokemon.name}</h2>
//     {/* Display additional details about the Pokemon */}
//     <p>Height: {pokemon.height}</p>
//     <p>Weight: {pokemon.weight}</p>
//     {/* Add more details as needed */}
//   </div>
// );

// export default PokemonDetails;

// src/components/pokemonDetails.tsx

import React from 'react';

interface PokemonDetailsProps {
  id: number;
  name: string;
  height: number;
  weight: number;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ id, name, height, weight }) => (
  <div>
    <h2>{`${id}. ${name}`}</h2>
    <p>{`Height: ${height}`}</p>
    <p>{`Weight: ${weight}`}</p>
  </div>
);

export default PokemonDetails;
