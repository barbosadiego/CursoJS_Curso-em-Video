function contar() {
  var ini = document.getElementById("ini");
  var fim = document.getElementById("fim");
  var passo = document.getElementById("passo");
  var res = document.getElementById("res");

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    //window.alert("[ERRO] Faltam dados!");
    res.innerHTML = "Impossível contar!";
  } else {
    res.innerHTML = "Contando: <br>";
    var i = Number(ini.value);
    var f = Number(fim.value);
    var p = Number(passo.value);
    if (p <= 0) {
      window.alert("Passo inválido! Considerando PASSO 1");
      p = 1;
    }
    if (i < f) {
      //contagem crescente
      for (var c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`; //codigo para emoji no js '\u{emoji}'
      }
    } else {
      //contagem decrescente
      for (var c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }

  /* 
  ********* códido antes da correção ****************

  var a = Number(ini.value);
  var b = Number(fim.value);
  var c = Number(passo.value);
  var res = document.querySelector("div#res");
  if (ini.value.length == 0) {
    res.innerHTML = "[ERRO] impossível contar sem início!";
  } else if (Number(passo.value) <= 0 || passo.value.length == 0) {
    res.innerHTML = "[ERRO] informe passo válido!";
  } else {
    res.innerHTML = `${a} &#X1F449`;
    for (var cont = 0; a < b - 1; cont++) {
      a += c;
      res.innerHTML += `${a} &#X1F449`;
    }
  }
  res.innerHTML += "&#X1F3C1";
  */
}
