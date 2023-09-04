import { lerLocalStorage, desenharProdutoCarrinhoSimples, formatter } from "./util";

const chave = "historicoBolad";

function criarPedidoHistorico(pedidoComData) {
    const elementoPedido = `
        <p class="text-xl text-bold text-slate-200 mt-4">${new Date(pedidoComData.dataPedido).toLocaleDateString("pt-BR", {
            hour: '2-digit',
            minute: '2-digit'
        })}</p>
        <p class="text-xl text-bold text-slate-200">Quantidade: ${pedidoComData.quantidade}</p>
        <p class="text-xl text-bold text-slate-200">Valor Total: ${formatter.format(pedidoComData.precoTotal)}</p>
        <section id="container-pedido-${pedidoComData.dataPedido}" class="bg-slate-700 rounded-lg pl-4 pt-2 w-[300px]"></section>
    `;
    const main = document.getElementsByTagName("main")[0];
    main.innerHTML += elementoPedido;
    for (const idProduto in pedidoComData.pedido) {
        desenharProdutoCarrinhoSimples(
            idProduto, `container-pedido-${pedidoComData.dataPedido}`, pedidoComData.pedido[idProduto]);
    }
}

function renderizarHistoricoPedido() {
    const historico = lerLocalStorage(chave);
    for (const pedidoComData of historico) {
        criarPedidoHistorico(pedidoComData);
    }
}

renderizarHistoricoPedido();