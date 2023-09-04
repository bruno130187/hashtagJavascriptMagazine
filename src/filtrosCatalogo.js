
const catalogo = document.getElementById("container-produto");

function exibirTodos() {
    const produtosHidden = Array.from(catalogo.getElementsByClassName("hidden"));
    for (const produto of produtosHidden) {
        produto.classList.remove("hidden");
    }
}

function esconderTipoCombustao() {
    const produtosTipoCombustao = Array.from(catalogo.getElementsByClassName("combustao"));
    for (const produto of produtosTipoCombustao) {
        produto.classList.add("hidden");
    }
}

function esconderTipoEletrico() {
    const produtosTipoEletrico = Array.from(catalogo.getElementsByClassName("eletrico"));
    for (const produto of produtosTipoEletrico) {
        produto.classList.add("hidden");
    }
}

function verificaSelecionadoFiltroTipo(valor) {
    if (valor === "eletrico") {
        exibirTodos();
        esconderTipoCombustao();
    }
    if (valor === "combustao") {
        exibirTodos();
        esconderTipoEletrico();
    }
    if (valor === "todos") {
        exibirTodos();
    }
}

export function inicializarFiltros() {
    const selectTipo = document.getElementById("filtro-tipo");
    selectTipo.addEventListener("change", () => verificaSelecionadoFiltroTipo(selectTipo.value));
}