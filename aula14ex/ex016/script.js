function contar() {
  var ini = document.getElementById("ini");
  var fim = document.getElementById("fim");
  var passo = document.getElementById("passo");
  var a = Number(ini.value);
  var b = Number(fim.value);
  var c = Number(passo.value);
  var d = 0
  var res = document.querySelector("div#res");
  if (ini.value.length == 0) {
    res.innerHTML = ("[ERRO] impossível contar sem início!&#X1F449");
  } else if (Number(passo.value) <= 0 || passo.value.length == 0) {
    res.innerHTML = ("[ERRO] informe passo válido!");
  } else {
    do{
      d = a + c
      res.innerHTML = `${d}`
    } while (a<b)
  }
}
