const myImage = document.querySelector("img");

myImage.onclick = ()=> {
    const mySrc = myImage.getAttribute("src");
        if (mySrc==="images/logo-senai.jpg")
{myImage.setAttribute("src", "images/logo-senai-2.png")

}   else {
    myImage.setAttribute("src", "images/logo-senai.jpg")
} 
}

// Seleciona o primeiro elemento <button> do HTML e guarda-o na variável myButton
let myButton = document.querySelector("button");

// Seleciona o primeiro elemento <h1> do HTML e guarda-o na variável myHeading
let myHeading = document.querySelector("h1");

// Define a função responsável por pedir e guardar o nome do utilizador
function setUserName() {
    // Abre uma caixa de texto no navegador a pedir o nome e guarda o valor digitado na variável myName
    const myName = prompt("Por favor, digite o seu nome");
    
    // Guarda o nome digitado no armazenamento local do navegador (LocalStorage) com a chave "name"
    localStorage.setItem("name", myName);
    
    // Atualiza o texto do título <h1> usando a interpolação de texto (` ${}`), exibindo "Bem-vindo ao SENAI, [nome]"
    myHeading.textContent = `Bem-vindo ao SENAI, ${myName}`;

    // Verifica se NÃO existe nenhum nome guardado no LocalStorage
    if (!localStorage.getItem("name")) {
        // Se estiver vazio (ex: o utilizador cancelou o prompt), chama a função novamente para pedir o nome
        setUserName();
    } else {
        // Se já existir um nome guardado, recupera esse valor do LocalStorage
        const storedName = localStorage.getItem("name");
        
        // Atualiza o texto do título <h1> com o nome recuperado do armazenamento
        myHeading.textContent = `Bem-vindo ao SENAI, ${storedName}`;
    }
}
// Configura o evento de clique no botão: quando o botão for clicado, executa a função setUserName()
myButton.onclick = () => {
    setUserName();
};