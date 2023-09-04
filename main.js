import { renderizarCatalogo } from "./src/cardProduto";
import { inicializarCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho";
import { inicializarModal, switchModal } from "./src/modal";
import { inicializarFiltros } from "./src/filtrosCatalogo";

window.switchModal=switchModal;

renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
inicializarModal();
inicializarFiltros();