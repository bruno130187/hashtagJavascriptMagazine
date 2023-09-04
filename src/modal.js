import { formatter } from "./util";

function abrirModal(carro) {
    let urlImagem = `./assets/img/${carro.imagem}`;
    const bodyIndex = document.getElementById("body-index");
    bodyIndex.classList.add("overflow-hidden");

    const modal = document.getElementById("modal");
    const modalImagem = document.getElementById("modal-image");
    const modalTexto = document.getElementById("modal-texto");

    if (document.getElementById("imagecar") !== null) {
        modalImagem.removeChild(document.getElementById("imagecar"));
    }

    modal.classList.remove("hidden");

    let img = document.createElement('img');
    img.id = "imagecar";
    img.src = urlImagem;
    img.className = "rounded-lg hover:scale-[125%] duration-300 h-[400px] shadow-xl shadow-slate-500";

    modalImagem.appendChild(img);

    modalTexto.innerHTML = "";
    modalTexto.innerHTML = `
        <div class="grid grid-cols-4 gap-1">
            <div class="col-span-1"><span class="font-bold text-xl">Código: </span><span class="text-xl">${carro.id}</span></div>
            <div class="col-span-1"><span class="font-bold text-xl">Nome: </span><span class="text-xl">${carro.nome}</span></div>
            <div class="col-span-1"><span class="font-bold text-xl">Marca: </span><span class="text-xl">${carro.marca}</span></div>
            <div class="col-span-1"><span class="font-bold text-xl">Tipo: </span><span class="text-xl">${carro.tipo}</span></div>
            <div class="col-span-1"><span class="font-bold text-xl">Preço: </span><span class="text-xl">${formatter.format(carro.preco)}</span></div>
            <div class="col-span-4"><span class="font-bold text-xl">Motor: </span><span class="text-[16px]">${carro.motor}</span></div>
            <div class="col-span-4"><span class="font-bold text-xl">Cavalaria: </span><span class="text-[16px]">${carro.cavalaria}</span></div>
            <div class="col-span-4"><span class="font-bold text-xl">Cilindros: </span><span class="text-[16px]">${carro.cilindros}</span></div>
            <div class="col-span-4"><span class="font-bold text-xl">Litragem do Motor: </span class="text-[16px]"><span>${carro.litragem}</span></div>
            <div class="col-span-4"><span class="font-bold text-xl">Aceleração: </span><span class="text-[16px]">${carro.aceleracao}</span></div>
        </div>
    `;

    modal.classList.add("block");
};

function fecharModal() {
    const bodyIndex = document.getElementById("body-index");
    bodyIndex.classList.remove("overflow-hidden");

    const modal = document.getElementById("modal");
    modal.classList.remove("block");
    modal.classList.add("hidden");
};

export const switchModal = (carro) => {
    const modal = document.getElementById("modal");
    const isBlock = modal.classList.contains("block");
    if(isBlock) {
        fecharModal();
    } else {
        abrirModal(carro);
    }
}

export function inicializarModal() {
    const botaoFecharModal = document.getElementById("fechar-modal");
    botaoFecharModal.addEventListener("click", switchModal);
}