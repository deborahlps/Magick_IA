/*
  O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados
    OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas
        passo 1 - pegar o botao de aplicar filtros do HTML e mandar pro JS
        passo 2 - escutar o clique no botão de aplicar filtros
        passo 3 - pegar os valores dos campos de categoria e preço
        passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida baseado nos filtros que a pessoa digitou
*/



document.addEventListener("DOMContentLoaded", function () {
  const botaoFiltrar = document.querySelector(".btn-filtrar");
  const selectCategoria = document.querySelector("#categoria");
  const inputPreco = document.querySelector("#preco");
  const cartas = document.querySelectorAll(".carta");

  botaoFiltrar.addEventListener("click", function () {
    const categoriaSelecionada = selectCategoria.value;
    const precoMaximoSelecionado = inputPreco.value;

    cartas.forEach(function (carta) {
      const categoriaCarta = carta.dataset.categoria;
      const precoCarta = parseFloat(carta.dataset.preco);

      let mostrarCarta = true;

      // Filtra por categoria
      if (categoriaSelecionada !== "" && categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase()) {
        mostrarCarta = false;
      }

      // Filtra por preço máximo
      if (precoMaximoSelecionado !== "" && precoCarta > parseFloat(precoMaximoSelecionado)) {
        mostrarCarta = false;
      }

      if (mostrarCarta) {
        carta.style.display = "block";
      } else {
        carta.style.display = "none";
      }
    });
  });
});



