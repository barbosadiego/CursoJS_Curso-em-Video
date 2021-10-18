function parimp(n) {
  //função 'parimp' possui parâmetro 'n'
  if (n % 2 == 0) {
    //se 'n' dividido por 2 tem resto zero
    return "Par!";
  } else {
    return "Impar!";
  }
}

let res = parimp(4);  //chamada para a function com o parâmetro '4'
console.log(res);
