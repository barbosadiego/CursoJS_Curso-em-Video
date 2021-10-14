function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    window.alert("Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radSex");
    var idade = ano - Number(fAno.value);
  }
}
