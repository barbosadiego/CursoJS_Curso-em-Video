let num = [5,8,2,9]
num[4]=1        //inserir valor 1 na posição 4
num.push(7)     //inserir valor no fim do array
num.sort()      //ordenar o array de forma crescente

console.log(num)
console.log(`O vetor tem ${num.length} elementos ou posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5)    //para pesquisar valores dentro do array usar 'indexOf()'
if (pos == -1){             //valores não encontrados retornam '-1' no 'indexOf'
  console.log('O valor não foi encontrado')
} else {
  console.log(`O valor pesquisado está na posição ${pos}`)
}