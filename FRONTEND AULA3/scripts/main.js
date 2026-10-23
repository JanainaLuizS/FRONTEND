// Seleciona o botão com a classe .btn-pedido
const btnPedido = document.querySelector(".btn-pedido");

// Adiciona o evento de clique no botão
if (btnPedido) {
    btnPedido.addEventListener("click", () => {
        // Define o número de telefone e a mensagem enviada
        const numeroTelefone = "5599999999999"; // Substitua pelo número real com DDD
        const mensagem = encodeURIComponent("Olá! Gostaria de fazer um pedido.");
        
        // Abre o link do WhatsApp numa nova aba
        window.open(`https://wa.me/${numeroTelefone}?text=${mensagem}`, "_blank");
    });
}