import { useState, useEffect } from 'react';

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  async function loadPokemons() {
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await resposta.json();
    setPokemons(data.results);
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <div>
      <h2>Lista de Pokémons</h2>
      
      {/* Grade de cards quadrados */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
        gap: "15px",
        marginTop: "20px"
      }}>
        {pokemons.map((pokemon, index) => (
          <div 
            key={index} 
            style={{
              background: "#f9f9f9",
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
              style={{ width: "90px", height: "90px" }}
            />
            <h4 style={{ 
              margin: "10px 0 0 0", 
              textTransform: "capitalize", 
              fontSize: "15px",
              color: "#333" 
            }}>
              {pokemon.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}