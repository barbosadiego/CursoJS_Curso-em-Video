function contar() {
  var ini = document.getElementById("ini");
  var fim = document.getElementById("fim");
  var passo = document.getElementById("passo");
  var a = Number(ini.value);
  var b = Number(fim.value);
  var c = Number(passo.value);
  var d = 0;
  var res = document.querySelector("div#res");
  if (ini.value.length == 0) {
    res.innerHTML = "[ERRO] impossível contar sem início!";
  } else if (Number(passo.value) <= 0 || passo.value.length == 0) {
    res.innerHTML = "[ERRO] informe passo válido!";
  } else {
    do {
      a + c;
      res.innerHTML += `${a} &#X1F449`;
    } while (a <= b);
  }
  res.innerHTML += "&#X1F3C1";
}
