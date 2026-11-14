import{useState} from "react";

function App() {
    const[titulo, setTitulo] = useState("");
    const[autor, setAutor] = useState("");
    const[anoPublicacao, setAnoPublicacao] = useState("");
    const [livros, setLivros] = useState([]);
    const [idEdicao, setEdicao] = useState(null);

    function adicionar() {
        if(titulo.trim() === "" || autor ==== "") return;
    
    const novoLivro = {
        id: crypto.randomUUID(),
        titulo: titulo.trim(),
        autor: autor.trim(),
    
    };

    setLivros(anteriores => [...anteriores, novoLivro]);
    setTitulo("");
    setAutor("");
    setAnoPublicacao("");

}
    function editar(livro) {
    setTitulo(livro.titulo);
    setAutor(livro.autor);
    setAnoPublicacao(livro.anoPublicacao);
}
  
    function remover(id) {
        setLivros(anteriores => anteriores.filter( livro =>
            livro.id !== id)
        );
    }
  
return (

    <section>
        <h1> Cadastro de Livros</h1>

        <input
        value = {titulo}
        onChange = {e => setTitulo(e. target.value)}
        placeHolder = "Título do livro"
        />

        <input 
        value = {autor}
        onChange = {e => setAutor(e. target.value)}
        placeHolder = "Autor do livro"
        /> 

        <input 
        value = {anoPublicacao}
        onChange = {e => setAnoPublicacao(e. target.value)}
        placeHolder = "Ano Publicação"
        /> 


    <button onClick = {adicionar} > Adicionar </button>

    <ul>
        {livros.map(livro => (
            <li key = {livro.id}>
                {livro.titulo}, {livro.autor}, {livro.anoPublicacao}
                <button onClick = {()=> remover(livro.id)}>Remover </button>
                <button onClick = {()=> editar(livro)}>Alterar </button>
                </li>
        ))}
        </ul>
        </section>
);   
    
}
export default App;