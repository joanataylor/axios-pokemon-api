import React from "react";
import { useState } from "react";
import axios from "axios"

const Poke = () => {
  const [pokemon, setPokemon] = useState();
  // const [result, setResult] = useState();

  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(res =>{
          console.log(res)
          setPokemon(res.data.results)
        })
        .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Poke</h1>
      <button onClick={axiosPokemon}>Fetch Poke with Axios</button>

      {/* pokemon && is alternative to ternary = hotwiring */}
      {pokemon &&
        pokemon.map((poke, idx) => {
          return (
            <div key={idx}>
              <p>{poke.name}</p>
            </div>
          );
        })}
    </div>
  );
};  

export default Poke;
