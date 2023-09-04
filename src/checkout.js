import { desenharProdutoCarrinhoSimples, formatter, salvarLocalStorage, lerLocalStorage, apagarLocalStorage, catalogo } from "./util";

const chaveCarrinho = "carrinhosBolad";
const chaveHistorico = "historicoBolad";

function mostraBotaoFinalizar() {
    const finalizar = document.getElementById("finalizar-compra-checkout");
    finalizar.classList.remove("hidden");
    finalizar.classList.add("block");
}

function escondeBotaoFinalizar() {
    const finalizar = document.getElementById("finalizar-compra-checkout");
    finalizar.classList.remove("block");
    finalizar.classList.add("hidden");
}

function desenharProdutosCheckout() {
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage(chaveCarrinho) ?? {};
    const precoCarrinho = document.getElementById("preco-total-checkout");
    const quantidadeCarrinho = document.getElementById("quantidade-total-checkout");
    const botaoFinalizar = document.getElementById("finalizar-compra-checkout");
    let precoTotalCarrinho = 0;
    let quantidadeTotalCarrinho = 0;

    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoCarrinhoSimples(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQuantidade[idProduto]);
        precoTotalCarrinho += catalogo.find((p) => p.id === parseInt(idProduto)).preco * idsProdutoCarrinhoComQuantidade[idProduto];
        quantidadeTotalCarrinho += idsProdutoCarrinhoComQuantidade[idProduto];
    }
    
    precoCarrinho.innerText = `Total: ${formatter.format(precoTotalCarrinho)}`;
    quantidadeCarrinho.innerText = `Total de Itens: ${quantidadeTotalCarrinho}`;
    const botaoVoltar = document.getElementById("voltar");
    botaoVoltar.addEventListener("click", () => {window.location.href = window.location.origin + "/index.html"});

    if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        escondeBotaoFinalizar();
        return;
    }

    mostraBotaoFinalizar();
}

function finalizarCompra(evento) {
    evento.preventDefault();
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage(chaveCarrinho) ?? {};
    if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        return;
    }
    const dataAtual = new Date();
    let precoTotalCarrinho = 0;
    let quantidadeTotalCarrinho = 0;

    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
        precoTotalCarrinho += catalogo.find((p) => p.id === parseInt(idProduto)).preco * idsProdutoCarrinhoComQuantidade[idProduto];
        quantidadeTotalCarrinho += idsProdutoCarrinhoComQuantidade[idProduto];
    }
    const pedidoFeito = {
        dataPedido: dataAtual,
        quantidade: quantidadeTotalCarrinho,
        precoTotal: precoTotalCarrinho,
        pedido: idsProdutoCarrinhoComQuantidade
    }
    const historicoDePedidos = lerLocalStorage(chaveHistorico) ?? [];
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];
    salvarLocalStorage(chaveHistorico, historicoDePedidosAtualizado);
    apagarLocalStorage(chaveCarrinho);
    location.href = "./pedidos.html";
}

desenharProdutosCheckout();

document.addEventListener("submit", (evento) => finalizarCompra(evento));