function produtoMudanca(produtoEscolhido, quantidadeEscolhida){ 
  var opcaoProduto = parseInt(produtoEscolhido);
  var quantidadeProdudos = parseInt(quantidadeEscolhida);

    switch (opcaoProduto) {
    case 0 : document.getElementById("total").value= 35.00 * quantidadeProdudos; break;
    case 1 : document.getElementById("total").value= 19.00 * quantidadeProdudos; break;
    case 2 : document.getElementById("total").value= 12.00 * quantidadeProdudos; break;
    case 3 : document.getElementById("total").value= 24.00 * quantidadeProdudos; break;
    case 4 : document.getElementById("total").value= 19.00 * quantidadeProdudos; break;
    case 5 : document.getElementById("total").value= 9.00 * quantidadeProdudos; break;
    }
}

function alerta() {
  if(!confirm("Tem certeza que deseja enviar?")) {
    return false;
  }
}