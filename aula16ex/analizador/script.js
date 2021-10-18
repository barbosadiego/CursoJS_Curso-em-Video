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
    var res = getElementById("res");
    var p = document.createElement("p");
    p.innerHTML = `Ao todo temos ${n.length} número cadastrados`;
    res.appendChild(p);
  }
}
