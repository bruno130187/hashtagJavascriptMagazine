import { catalogo, formatter, salvarLocalStorage, lerLocalStorage } from "./util";

const chave = "carrinhosBolad";
const idsProdutoCarrinhoComQuantidade = lerLocalStorage(chave) ?? {};

function abrirCarrinho() {
    const carrinho = document.getElementById("carrinho");
    carrinho.classList.remove("right-[-360px]");
    carrinho.classList.add("right-[0px]");
}

function fecharCarrinho() {
    const carrinho = document.getElementById("carrinho");
    carrinho.classList.remove("right-[0px]");
    carrinho.classList.add("right-[-360px]");
}

function irParaCheckout() {
    if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        return;
    }
    window.location.href = "/checkout.html";
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
    const botaoIrParaCheckout = document.getElementById("finalizar-compra");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
    botaoIrParaCheckout.addEventListener("click", irParaCheckout);
}

function incrementarQuantidadeProduto(idProduto) {
    if (idsProdutoCarrinhoComQuantidade[idProduto] <= 4) {
        idsProdutoCarrinhoComQuantidade[idProduto]++;
        atualizarInformacaoQuantidadeCard(idProduto);
        atualizarPrecoCarrinho();
        salvarLocalStorage(chave, idsProdutoCarrinhoComQuantidade);
        console.log("idsProdutoCarrinhoComQuantidade: ", idsProdutoCarrinhoComQuantidade);
    } else {
        console.log("A quantidade máxima é de 5 unidades!");
        console.log("idsProdutoCarrinhoComQuantidade: ", idsProdutoCarrinhoComQuantidade);
    }
}

function atualizarQuantidadeProduto(idProduto, quantidade) {
    idsProdutoCarrinhoComQuantidade[idProduto] = parseInt(quantidade);
    console.log("idsProdutoCarrinhoComQuantidade: ", idsProdutoCarrinhoComQuantidade);
    atualizarInformacaoQuantidadeCard(idProduto);
    atualizarPrecoCarrinho();
    salvarLocalStorage(chave, idsProdutoCarrinhoComQuantidade);
}

function atualizarInformacaoQuantidadeCard(idProduto) {
    document.getElementById(`quantidade-${idProduto}`).value = idsProdutoCarrinhoComQuantidade[idProduto];
}

function removerDoCarrinho(idProduto) {
    console.log("IdProduto removido do carrinho: ", idProduto);
    delete idsProdutoCarrinhoComQuantidade[idProduto];
    console.log("idsProdutoCarrinhoComQuantidade: ", idsProdutoCarrinhoComQuantidade);
    renderizarProdutosCarrinho();
    atualizarPrecoCarrinho();
    salvarLocalStorage(chave, idsProdutoCarrinhoComQuantidade);
}

function mostraBotaoFinalizar() {
    const finalizar = document.getElementById("finalizar-compra");
    finalizar.classList.remove("hidden");
    finalizar.classList.add("block");
}

function escondeBotaoFinalizar() {
    const finalizar = document.getElementById("finalizar-compra");
    finalizar.classList.remove("block");
    finalizar.classList.add("hidden");
}

function desenharProdutoNoCarrinho(idProduto) {
    const produto = catalogo.find((p) => p.id === parseInt(idProduto));
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");

    const elementoArticle = document.createElement("article");
    elementoArticle.id = `article-${idProduto}`;

    const elementoArticleClasses = ["flex", "bg-slate-500", "rounded-lg", "text-slate-200", "p-1", "relative", "max-w-[95%]"];
    for (const articleClass of elementoArticleClasses) {
        elementoArticle.classList.add(articleClass);
    }

    const cardProdutoCarrinho = `
        <button id="remover-${produto.id}" class="absolute top-0 right-[3px]" title="Excluir produto do carrinho">
            <i class="fa-solid fa-circle-xmark text-slate-200 hover:text-red-700"></i>
        </button>
        <img src="./assets/img/${produto.imagem}" alt="${produto.imagem}" class="max-w-[120px] rounded-lg">
        <div class="p-1 text-[14px] flex flex-col justify-between py-1">
            <p>${produto.nome}</p>
            <p>${produto.marca}</p>
            <p>${formatter.format(produto.preco)}</p>
            <select id="quantidade-${produto.id}" title="Quantidade" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50px] p-0.7 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    `;

    elementoArticle.innerHTML = cardProdutoCarrinho;

    containerProdutosCarrinho.appendChild(elementoArticle);

    document.getElementById(`remover-${produto.id}`).addEventListener("click", () => removerDoCarrinho(produto.id));

    const select = document.getElementById(`quantidade-${produto.id}`);
    select.addEventListener("change", () => atualizarQuantidadeProduto(produto.id, select.value));
    select.value = idsProdutoCarrinhoComQuantidade[produto.id];

    atualizarPrecoCarrinho();
    mostraBotaoFinalizar();
}

export function renderizarProdutosCarrinho() {
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");
    containerProdutosCarrinho.innerHTML = "";
    if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        escondeBotaoFinalizar();
        return;
    }
    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoNoCarrinho(idProduto);
    }
}

export function adicionarAoCarrinho(idProduto) {
    console.log("idProduto inserido no carrinho: ", idProduto);

    if (idProduto in idsProdutoCarrinhoComQuantidade) {
        incrementarQuantidadeProduto(idProduto);
        return;
    }

    idsProdutoCarrinhoComQuantidade[idProduto] = 1;
    console.log("idsProdutoCarrinhoComQuantidade: ", idsProdutoCarrinhoComQuantidade);

    desenharProdutoNoCarrinho(idProduto);
    atualizarPrecoCarrinho();
    salvarLocalStorage(chave, idsProdutoCarrinhoComQuantidade);
}

function atualizarPrecoCarrinho() {
    const precoCarrinho = document.getElementById("preco-total");
    let precoTotalCarrinho = 0;
    for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
        precoTotalCarrinho += catalogo.find((p) => p.id === parseInt(idProdutoNoCarrinho)).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
    }
    console.log("precoTotalCarrinho: ", precoTotalCarrinho);
    precoCarrinho.innerText = `Total: ${formatter.format(precoTotalCarrinho)}`;
}