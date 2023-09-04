export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

export function salvarLocalStorage(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {
  const produto = catalogo.find((p) => p.id === parseInt(idProduto));
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article");
  elementoArticle.id = `article-${idProduto}`;

  const elementoArticleClasses = [
    "flex", 
    "bg-slate-500", 
    "rounded-lg", 
    "text-slate-200", 
    "p-1", 
    "relative", 
    "max-w-[95%]",
    "mb-2"
  ];
  for (const articleClass of elementoArticleClasses) {
      elementoArticle.classList.add(articleClass);
  }

  const cardProdutoCarrinho = `
      <img src="./assets/img/${produto.imagem}" alt="${produto.imagem}" class="max-w-[120px] rounded-lg">
      <div class="p-1 text-[14px] flex flex-col justify-between py-1 cursor-pointer ">
          <p>${produto.nome}</p>
          <p>${produto.marca}</p>
          <p>${formatter.format(produto.preco)}</p>
          <span title="Quantidade" disabled class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40px] p-0.7 text-center dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            ${quantidadeProduto}
          </span>
      </div>
  `;

  elementoArticle.innerHTML = cardProdutoCarrinho;

  containerProdutosCarrinho.appendChild(elementoArticle);
}

export const catalogo = [
    {
      id: 1,
      nome: "Vulcan",
      marca: "Aston Martin",
      preco: 2300000.0,
      origem: "Inglaterra",
      imagem: "Aston_Martin_Vulcan.jpg",
      tipo: "Combustão",
      motor: "O Aston Martin Vulcan é equipado com um motor V12 naturalmente aspirado.",
      cavalaria: "Esse motor produz uma potência extremamente alta. O Aston Martin Vulcan tem uma potência de cerca de 800 cavalos.",
      cilindros: "O motor do Vulcan é um V12, o que significa que ele tem 12 cilindros dispostos em duas fileiras de seis.",
      litragem: "O motor V12 do Aston Martin Vulcan tem uma litragem de aproximadamente 7.0 litros.",
      aceleracao: "O Aston Martin Vulcan é capaz de acelerar de 0 a 100 km/h (ou 0 a 62 mph) em cerca de 2.9 segundos. No entanto, é importante notar que os números de desempenho podem variar ligeiramente dependendo das condições de teste e configurações específicas."
    },
    {
      id: 2,
      nome: "R8",
      marca: "Audi",
      preco: 171000.0,
      origem: "Alemanha",
      imagem: "audi-r8-18.jpg",
      tipo: "Combustão",
      motor: "O Audi R8 possui uma variedade de motores ao longo das diferentes gerações. As opções de motores incluem V8 e V10. Os motores V10 são usados nas versões mais potentes e recentes do R8.",
      cavalaria: "A potência do Audi R8 varia dependendo da geração e da versão do motor. Nas versões mais potentes com motor V10, a potência pode variar de cerca de 540 a 620 cavalos, dependendo do modelo específico e de eventuais variantes especiais.",
      cilindros: "O Audi R8 com motor V8 tem 8 cilindros dispostos em uma configuração de V. Já nas versões mais potentes com motor V10, são 10 cilindros também dispostos em uma configuração de V.",
      litragem: "As versões com motor V8 geralmente têm uma litragem em torno de 4.2 litros. Nas versões V10, a litragem fica em torno de 5.2 litros.",
      aceleracao: "O tempo de aceleração de 0 a 100 km/h para o Audi R8 varia de acordo com a geração e a configuração do motor. Nas versões mais potentes, com motor V10 e tração nas quatro rodas, o tempo de aceleração pode estar na faixa de 3.2 a 3.5 segundos, dependendo do modelo específico."
    },
    {
      id: 3,
      nome: "Bacalar",
      marca: "Bentrley",
      preco: 1900000.0,
      origem: "Inglaterra",
      imagem: "bentley-bacalar.jpg",
      tipo: "Combustão",
      motor: "O Bentley Bacalar é equipado com um motor W12 de 6.0 litros.",
      cavalaria: "Ele produz uma potência de cerca de 650 cavalos.",
      cilindros: "O motor possui 12 cilindros dispostos em uma configuração de W.",
      litragem: "A litragem do motor é de aproximadamente 6.0 litros.",
      aceleracao: "O tempo de aceleração de 0 a 100 km/h é de cerca de 3.5 segundos."
    },
    {
      id: 4,
      nome: "Divo",
      marca: "Bugatti",
      preco: 5800000.0,
      origem: "Alemanha",
      imagem: "Bugatti_Divo.jpg",
      tipo: "Combustão",
      motor: "O Bugatti Divo é equipado com um motor quad-turbo W16 de 8.0 litros.",
      cavalaria: "Ele produz uma potência incrível de 1500 cavalos.",
      cilindros: "O motor possui 16 cilindros dispostos em uma configuração de W.",
      litragem: "A litragem total do motor é de 8.0 litros, divididos em quatro bancadas de cilindros.",
      aceleracao: "O tempo de aceleração de 0 a 100 km/h é de cerca de 2.4 segundos."
    },
    {
      id: 5,
      nome: "Venom",
      marca: "Hennessey",
      preco: 2700000.0,
      origem: "Estados Unidos",
      imagem: "hennessey-venom-gt.jpg",
      tipo: "Combustão",
      motor: "O Hennessey Venom é equipado com um motor V8 twin-turbo de 7.4 litros.",
      cavalaria: "Ele produz uma potência impressionante de 1600 a 2000 cavalos, dependendo da versão e configuração.",
      cilindros: "O motor possui 8 cilindros dispostos em uma configuração em V.",
      litragem: "A litragem total do motor é de 7.4 litros.",
      aceleracao: "O tempo de aceleração de 0 a 100 km/h pode variar entre 2.4 a 2.8 segundos, dependendo da versão."
    },
    {
      id: 6,
      nome: "One",
      marca: "Koenigsegg",
      preco: 2850000.0,
      origem: "Suécia",
      imagem: "Koenigsegg-One.jpg",
      tipo: "Combustão",
      motor: "O Koenigsegg One:1 é equipado com um motor twin-turbo V8 de 5.0 litros.",
      cavalaria: "Ele produz incríveis 1360 cavalos, o que se traduz em uma relação de um cavalo por quilo, daí o nome One:1.",
      cilindros: "O motor possui 8 cilindros dispostos em uma configuração em V.",
      litragem: "A litragem total do motor é de 5.0 litros.",
      aceleracao: "O tempo de aceleração de 0 a 100 km/h é de aproximadamente 2.8 segundos."
    }
    ,
    {
      id: 7,
      nome: "LaFerrari",
      marca: "Ferrari",
      preco: 2000000.0,
      origem: "Itália",
      imagem: "La-ferrari-1.jpg",
      tipo: "Combustão",
      motor: "O Ferrari LaFerrari é equipado com um motor V12 associado a um motor elétrico, formando um sistema híbrido.",
      cavalaria: "O motor V12 produz 800 cavalos, enquanto o motor elétrico contribui com aproximadamente 163 cavalos, resultando em uma potência combinada de cerca de 963 cavalos.",
      cilindros: "O motor V12 possui 12 cilindros dispostos em uma configuração em V.",
      litragem: "A litragem total do motor V12 é de 6.3 litros.",
      aceleracao: "O tempo de aceleração de 0 a 100 km/h é de cerca de 2.4 segundos."
    },
    {
      id: 8,
      nome: "Revuelto",
      marca: "Lamborghini",
      preco: 600000.0,
      origem: "Itália",
      imagem: "Lamborghini-Revuelto.jpg",
      tipo: "Combustão",
      motor: "Motor V12 aspirado.",
      cavalaria: "Possui 1.015 cv.",
      cilindros: "Tem 12 cilindros",
      litragem: "A litragem do motor é de 6,5 litros.",
      aceleracao: "E faz de 0 a 100 km/h em 2,5 segundos."
    },
    {
      id: 9,
      nome: "Evija",
      marca: "Lotus",
      preco: 2300000.0,
      origem: "Inglaterra",
      imagem: "Lotus_evija.jpg",
      tipo: "Combustão",
      motor: "O Lotus Evija é equipado com quatro motores elétricos, um em cada roda, proporcionando tração nas quatro rodas.",
      cavalaria: "A potência total do sistema é de incríveis 2000 cavalos.",
      cilindros: "O carro não possui cilindros, uma vez que é alimentado por motores elétricos.",
      litragem: "Devido à natureza elétrica do carro, não possui uma litragem de motor convencional.",
      aceleracao: "O tempo de aceleração de 0 a 100 km/h é de aproximadamente 2.6 segundos."
    },
    {
      id: 10,
      nome: "Senna",
      marca: "McLaren",
      preco: 1182000.0,
      origem: "Inglaterra",
      imagem: "McLaren_Senna.jpg",
      tipo: "Combustão",
      motor: "O McLaren Senna é equipado com um motor V8 twin-turbo de 4.0 litros.",
      cavalaria: "Ele produz uma potência impressionante de 800 cavalos.",
      cilindros: "O motor possui 8 cilindros dispostos em uma configuração em V.",
      litragem: "A litragem total do motor é de 4.0 litros.",
      aceleracao: "O tempo de aceleração de 0 a 100 km/h é de cerca de 2.8 segundos."
    },
    {
      id: 11,
      nome: "AMG GT Coupe",
      marca: "Mercedes-Benz",
      preco: 150000.0,
      origem: "Inglaterra",
      imagem: "Mercedes-AMG-GT-Coupe-2024-2.jpg",
      tipo: "Combustão",
      motor: "O Mercedes-Benz AMG GT Coupe é equipado com um motor V8 twin-turbo.",
      cavalaria: "A potência varia em diferentes versões, mas pode variar de aproximadamente 469 a 730 cavalos, dependendo do modelo específico.",
      cilindros: "O motor possui 8 cilindros dispostos em uma configuração em V.",
      litragem: "A litragem do motor pode variar dependendo da versão, mas geralmente está na faixa de 4.0 a 6.3 litros.",
      aceleracao: "O tempo de aceleração de 0 a 100 km/h varia entre cerca de 3.7 a 3.2 segundos, dependendo da versão."
    },
    {
      id: 12,
      nome: "Mach 1",
      marca: "Mustang",
      preco: 80000.0,
      origem: "Estados Unidos",
      imagem: "Mustang-Mach-1.jpg",
      tipo: "Combustão",
      motor: "O Mustang Mach 1 é equipado com um motor V8.",
      cavalaria: "A potência pode variar dependendo da geração e versão específica, mas geralmente varia de cerca de 305 a 480 cavalos.",
      cilindros: "O motor possui 8 cilindros dispostos em uma configuração em V.",
      litragem: "A litragem do motor pode variar dependendo da geração e versão, mas geralmente está na faixa de 4.6 a 5.0 litros.",
      aceleracao: "O tempo de aceleração de 0 a 100 km/h pode variar dependendo da geração e configuração, mas geralmente está na faixa de 4.0 a 6.0 segundos."
    },
    {
      id: 13,
      nome: "Huayra",
      marca: "Pagani",
      preco: 2000000.0,
      origem: "Itália",
      imagem: "Pagani_Huayra.jpg",
      tipo: "Combustão",
      motor: "O Pagani Huayra é equipado com um motor V12 twin-turbo.",
      cavalaria: "A potência pode variar dependendo da versão e configuração, mas geralmente varia de cerca de 700 a 800 cavalos.",
      cilindros: "O motor possui 12 cilindros dispostos em uma configuração em V.",
      litragem: "A litragem do motor varia dependendo da versão e configuração, mas geralmente está na faixa de 6.0 a 6.3 litros.",
      aceleracao: "O tempo de aceleração de 0 a 100 km/h pode variar dependendo da versão e configuração, mas geralmente está na faixa de 3.0 a 3.5 segundos."
    },
    {
      id: 14,
      nome: "Battista",
      marca: "Pininfarina",
      preco: 2000000.0,
      origem: "Alemanha",
      imagem: "Pininfarina_battista.jpg",
      tipo: "Combustão",
      motor: "O Pininfarina Battista é equipado com um sistema de propulsão elétrica.",
      cavalaria: "Ele produz uma potência incrível de aproximadamente 1900 cavalos.",
      cilindros: "Como é um veículo elétrico, o Battista não possui cilindros no sentido tradicional dos motores a combustão.",
      litragem: "A litragem não se aplica ao sistema de propulsão elétrica.",
      aceleracao: "O tempo de aceleração de 0 a 100 km/h é de aproximadamente 2.0 segundos."
    },
    {
      id: 15,
      nome: "Taycan",
      marca: "Porsche",
      preco: 90000.0,
      origem: "Alemanha",
      imagem: "Porsche-Taycan_2.jpg",
      tipo: "Elétrico",
      motor: "O motor é 100% Elétrico.",
      cavalaria: "Tem 670 cavalos de potência.",
      cilindros: "0",
      litragem: "0",
      aceleracao: "Faz de 0 a 100 Km/h em 2,8 segundos."
    },
    {
      id: 16,
      nome: "Range Rover Velar",
      marca: "Land Rover",
      preco: 80000.0,
      origem: "Inglaterra",
      imagem: "Range_Rover_Velar.jpg",
      tipo: "Combustão",
      motor: "Motor é Híbrido Plug-in.",
      cavalaria: "Possui 395 cavalos de potência.",
      cilindros: "O motor tem 6 cilindros.",
      litragem: "A litragem é de 3.0.",
      aceleracao: "Faz de 0 a 100km/h em 6,3 segundos."
    },
    {
      id: 17,
      nome: "TSR-GT",
      marca: "Zenvo",
      preco: 1600000.0,
      origem: "Dinamarca",
      imagem: "zenvo-tsr.jpg",
      tipo: "Combustão",
      motor: "O Motor é im V8.",
      cavalaria: "Tem 1.360 cavalos de potência.",
      cilindros: "Possui 8 cilindros.",
      litragem: "A litragem do motor é de 5.8 litros.",
      aceleracao: "Faz de 0 a 100km/h em 2,8 segundos."
    },
    {
      id: 18,
      nome: "Seal",
      marca: "BYD",
      preco: 296800.0,
      origem: "China",
      imagem: "byd-seal.jpeg",
      tipo: "Elétrico",
      motor: "Dois motores elétricos, um em cada eixo do carro, que entregam 531 cv de potência e 68,3 kgfm de torque.",
      cavalaria: "531 cv",
      cilindros: "0",
      litragem: "0",
      aceleracao: "Faz de 0 a 100 Km/h em 3,8 segundos."
    }
  ];