
function tabuada(){
  let num =document.getElementById('num')
  let tab =document.getElementById('seltab')
  if (num.value.length == 0){
    window.alert('Por favor digite um número')
  } else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''//limpa a tabuada antes de começar
    while (c <= 10){
      let item = document.createElement('option')//criando o elemento html 'option'
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}`//para outras linguagens
      tab.appendChild(item)//adicionar elemento filho
      c++
    }
  } 
}

/*
código antes da correção

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
*/
