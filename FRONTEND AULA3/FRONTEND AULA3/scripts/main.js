// --- 1. LÓGICA DA PÁGINA PRINCIPAL (index.html) ---
// Seleciona o botão com a classe .btn-pedido (se ele existir na página atual)
const btnPedido = document.querySelector(".btn-pedido");

if (btnPedido) {
    btnPedido.addEventListener("click", () => {
        const numeroTelefone = "5599999999999"; // Substitua pelo seu número com DDD
        const mensagem = encodeURIComponent("Olá! Gostaria de fazer um pedido.");
        
        // Abre o WhatsApp numa nova aba
        window.open(`https://wa.me/${numeroTelefone}?text=${mensagem}`, "_blank");
    });
}


// --- 2. LÓGICA DA PÁGINA DE PEDIDOS (pedido.html) ---
// Seleciona os elementos do formulário de cálculo (se eles existirem na página atual)
const campoNome = document.querySelector("#nome");
const campoQuantidade = document.querySelector("#quantidade");
const botaoCalculo = document.querySelector("#botaoPedido");
const resultado = document.querySelector("#resultado");

if (botaoCalculo) {
    botaoCalculo.onclick = function () {
        const nome = campoNome.value;
        const quantidade = campoQuantidade.value;
        const preco = 20.00;
        const total = preco * quantidade;

        resultado.textContent = nome + ", seu pedido de " + quantidade + " hambúrguer(es) ficou em R$ " + total.toFixed(2) + ".";
    };
}