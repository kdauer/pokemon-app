import React from "react";

export function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <div classNAme="pokemon_name">
        <p>{pokemon.name}</p>
      </div>
      <div classNAme="pokemon_meta">
        <span>{pokemon.maxHP}</span>
        <span>{pokemon.maxCP}</span>
      </div>
      <div classNAme="pokemon_image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div classNAme="pokemon_attacks">
        {pokemon &&
          pokemon.attacks &&
          pokemon.attacks.special
            .slice(0, 3)
            .map(attack => (
              <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
            ))}
      </div>
    </div>
  );
}
