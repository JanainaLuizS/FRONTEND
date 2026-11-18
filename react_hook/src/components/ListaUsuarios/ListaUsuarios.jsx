import { useState, useEffect } from 'react';


export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  const [usuarioGitHub, setUsuarioGitHub] = useState({});

  async function buscarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const dados = await resposta.json();
    setUsuarios(dados);
  }

  async function buscarUsuarioGitHub() {
    const resposta = await fetch("https://api.github.com/users/JanainaLuizS");
    const dados = await resposta.json();
    setUsuarioGitHub(dados);
  }

  useEffect(() => {
    buscarUsuarios();
    buscarUsuarioGitHub();
  }, []);

  return (

    <div style={{ padding: "20px" }}>
      <h1>{usuarioGitHub.login}</h1>
      <img
        src={usuarioGitHub.avatar_url}
      />

      <h2>Lista de Usuários (API)</h2>
  <ul>
    {usuarios.map(usuario => (
      <li key={usuario.id}>{usuario.name}</li>
    ))}
  </ul>

    </div>



  )}
  

