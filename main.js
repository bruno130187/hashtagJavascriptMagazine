import { renderizarCatalogo } from "./src/cardProduto";
import { inicializarCarrinho, renderizarProdutosCarrinho, inicializarModalAlerta } from "./src/menuCarrinho";
import { inicializarModal, switchModal } from "./src/modal";
import { inicializarFiltros } from "./src/filtrosCatalogo";

window.switchModal=switchModal;

renderizarCatalogo();
inicializarModalAlerta();
inicializarCarrinho();
renderizarProdutosCarrinho();
inicializarModal();
inicializarFiltros();