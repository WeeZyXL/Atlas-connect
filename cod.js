const ITENS = {
  1001: { nome: "Areia", quantidade: 0, limite: 3000 },
  1002: { nome: "Arenoso", quantidade: 0, limite: 3000 },
  1003: { nome: "Brita", quantidade: 0, limite: 3000 },
  1004: { nome: "Cimento", quantidade: 0, limite: 3000 },
  1005: { nome: "Tijolo", quantidade: 0, limite: 3000 },
  1006: { nome: "Telha", quantidade: 0, limite: 3000 },
  1007: { nome: "Cano PVC", quantidade: 0, limite: 3000 },
  1008: { nome: "Maderite", quantidade: 0, limite: 3000 },
  1009: { nome: "Argamassa", quantidade: 0, limite: 3000 },
  1010: { nome: "Ceramica", quantidade: 0, limite: 3000 },
};

function armazenarQuantidade(codigo, quantidade) {
  if (ITENS[codigo]) {
    const item = ITENS[codigo];

    if (quantidade > item.limite) {
      alert(
        `Quantidade excede o limite de ${item.limite} para o item ${item.nome}.`
      );
    } else {
      item.quantidade = quantidade;
      alert(`Quantidade de ${item.nome} armazenada: ${quantidade}`);
      conferirITENS();
    }
  } else {
    alert("Código de item inválido.");
  }
}

function distribuirItens() {
  const destino = document.getElementById("destino").value;
  const codigoDestino = Number(document.getElementById("codigoDestino").value);
  const quantidadeDestino = Number(
    document.getElementById("quantidadeDestino").value
  );

  if (destino && codigoDestino && quantidadeDestino) {
    const item = ITENS[codigoDestino];
    if (item) {
      if (quantidadeDestino > item.quantidade) {
        alert(`Quantidade insuficiente de ${item.nome} em estoque.`);
      } else {
        const confirmacao = confirm(
          `Deseja distribuir ${quantidadeDestino} de ${item.nome} para o destino ${destino}?`
        );
        if (confirmacao) {
          item.quantidade -= quantidadeDestino;
          alert(
            `Distribuído ${quantidadeDestino} de ${item.nome} para o destino ${destino}.`
          );
          conferirITENS();
        }
      }
    } else {
      alert("Código de item inválido.");
    }
  } else {
    alert("Preencha todos os campos.");
  }
}

function conferirITENS() {
  const container = document.getElementById("resultadoConferencia");
  container.innerHTML = "";

  const tabela = document.createElement("table");
  tabela.className = "inventario-tabela";

  tabela.innerHTML = `
    <thead>
      <tr>
        <th>Código</th>
        <th>Item</th>
        <th>Quantidade</th>
      </tr>
    </thead>
    <tbody>
      ${Object.entries(ITENS)
        .map(
          ([codigo, item]) => `
        <tr>
          <td>${codigo}</td>
          <td>${item.nome}</td>
          <td>${item.quantidade}</td>
        </tr>`
        )
        .join("")}
    </tbody>
  `;

  container.appendChild(tabela);
}

function armazenamento() {
  const codigo = Number(document.getElementById("codigo").value);
  const quantidade = Number(document.getElementById("quantidade").value);

  if (codigo && quantidade) {
    armazenarQuantidade(codigo, quantidade);
  } else {
    alert("Por favor, insira o código e a quantidade.");
  }
}
