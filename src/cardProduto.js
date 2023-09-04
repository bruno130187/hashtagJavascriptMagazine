import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo, formatter } from "./util";


export function renderizarCatalogo() {
  for (const produto of catalogo) {
    const cartaoProduto = `
      <div id="${produto.id}" class="border-solid border-4 border-yellow-400 w-72 m-2 rounded-md flex flex-col justify-between group shadow-lg shadow-slate-600 ${produto.tipo === 'Elétrico' ? 'eletrico' : 'combustao'}">
      <img title="Abrir detalhes do carro" class="flex rounded-lg w-72 h-40 p-1 group-hover:scale-[103%] duration-300" src="assets/img/${produto.imagem}" alt="${produto.imagem}" onClick='switchModal(${JSON.stringify(produto)})'>
      <p class="text-gray-400 ml-2" >${produto.marca}</p>
      <p class="text-gray-400 ml-2" >${produto.nome}</p>
      <p class="text-gray-400 ml-2" >${formatter.format(produto.preco)}</p>
      <button id="adicionar-${produto.id}" type="button" title="Adicionar ao carrinho" class="ml-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <i class="fa-solid fa-cart-plus text-slate-200" ></i>
      </button>
      </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for (const produto of catalogo) {
    document.getElementById(`adicionar-${produto.id}`).addEventListener("click", () => adicionarAoCarrinho(produto.id));
  }
}
