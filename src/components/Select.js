import React from "react";

export function Select() {
  return (
    <div>
      <form>
        <label htmlFor="number">Number of Pokemons</label>
        <input type="number" name="number" id="number" />
      </form>
    </div>
  );
}
