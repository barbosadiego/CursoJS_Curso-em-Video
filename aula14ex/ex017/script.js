var num = document.getElementById("num");
var res = document.getElementById("res");
var tab = ''
function tabuada() {
  if (num.value.length == 0) {
    window.alert("Por favor digite um número");
  } else {
    var a = Number(num.value);
    res.innerHTML = "contando";
    for (var cont = 1; cont <= 10; cont++) {
      tab += a + 'x' + cont + '=' + a*cont + '<br/>'
    }
  } res.innerHTML = tab
}
