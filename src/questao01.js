import leia from "readline-sync";

var produto = leia.questionFloat("Informe o valor do produto: ")

if (produto <= 20) {
    var total = produto + (produto * 0.45)
    console.log("Valor Total do produto R$ " + total.toFixed(2))
}else{
    var total = produto + (produto * 0.30)
    console.log("Valor total do produto R$ " + total.toFixed(2))
}