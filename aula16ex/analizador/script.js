let num = document.querySelector("input#fnum"); //recebe os valores do 'fnum'
let lista = document.querySelector("select#flista"); //insere na lista
let res = document.querySelector("div#res"); //manipula a resposta
let valores = []; // recebe os valores para o array

function isNumero(n) {
  //verifica se o número está ente 1 e 100
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  //verifica se o número já está na lista
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    //se estiver no escopo e não repetir na lista
    valores.push(Number(num.value));
    //valores = Number(num.value)
    var opt = document.createElement("option");
    opt.textContent = `Valor ${num.value} adicionado`; //não precisa converter pois a lista é string
    lista.appendChild(opt);
    res.innerHTML = ""; //quando adicionar um elemento limpa o resultado
  } else {
    window.alert("Valor inválido ou já adicionado na lista.");
  }
  num.value = ""; //limpar o fnum
  num.focus(); //dar o foco
}

function finalizar() {
  if (valores.length == 0) {
    //se não houver nada no array
    window.alert("Adicione valores antes de finalizar");
  } else {
    let tot = valores.length;
    let maior = valores[0]; //quando começa a pesquisar o maior número é o 1º
    let menor = valores[0]; //quando começa a pesquisar o menot número é o 1º
    let soma = 0;
    let media = 0;
    for (let pos in valores) {
      //para somar os elementos
      soma += valores[pos];
      //para cada posição em valores
      if (valores[pos] > maior)
        //se valores na posição 'pos' é maior que 'maior' então passa a ser este
        maior = valores[pos];
      if (valores[pos < menor])
        //se valores na posição 'pos' é menor que 'menor' então passa a ser este
        menor = valores[pos];
    }
    media = soma / tot;
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo temos ${tot} número cadastrados</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
    res.innerHTML += `<p>Somanto todos os valores temos ${soma}</p>`;
    res.innerHTML += `<p>A média de todos os valores é ${media}</p>`;
  }
}

/*
código antes da correção
function adicionar() {
  var num = document.getElementById("num");
  var n = [Number(num.value)];
  var sel = document.getElementById("sel");
  if (num.value.length == 0 || num.value < 1 || num.value > 100) {
    window.alert("Valor inválido ou já adiconado na lista");
  }
  //else if (Number(num.value) === n.indexOf(Number(num.value))) {
  //  window.alert("Repedito!");
  //}
  else {
    var opt = document.createElement("option");
    opt.textContent = `Valor ${n} adicionado`;
    sel.appendChild(opt);
  }

  function finalizar() {
    var res = document.getElementById("res");
    var p = document.createElement("p");
    p.innerHTML = `Ao todo temos ${n.length} número cadastrados`;
    res.appendChild(p);
  }
}
*/
