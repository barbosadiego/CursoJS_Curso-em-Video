function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtano");
  var res = document.querySelector("div#res");//forma alternativa de selecionar
  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fAno.value);
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {//se o 1º item for o selecionado
      genero = 'Homem'
      if (idade >=0 && idade <10){
        //criança
        img.setAttribute('src','h-bebe.jpg')
      } else if (idade < 21){
        //jovem
        img.setAttribute('src','h-jovem.jpg')
      } else if (idade <50){
        //adulto
        img.setAttribute('src','h-adulto.jpg')
      } else {
        //idoso
        img.setAttribute('src','h-idoso.jpg')
      }
    } else if (fsex[1].checked) {//se o 2º item for o selecionado
      genero = 'Mulher'
      if (idade >=0 && idade <10){
        //criança
        img.setAttribute('src', 'f-bebe.jpg')
      } else if (idade < 21){
        //jovem
        img.setAttribute('src','m-jovem.jpg')
      } else if (idade <50){
        //adulto
        img.setAttribute('src','m-adulta.jpg')
      } else {
        //idoso
        img.setAttribute('src','m-idosa.jpg')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.style.textAlign = 'center'//centralizar o texto
    res.appendChild(img)//adiciona o elemento abaixo
  }
}
