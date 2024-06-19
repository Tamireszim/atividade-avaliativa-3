import leia from "readline-sync";

var nota = leia.questionFloat("Informe nota final: ");


if(nota >= 9.0) {
        console.log("A");
}else if (nota >= 8.0) {
        console.log("B");
} else if (nota >= 7.0){
    console.log("C");
}else if (nota >= 6.0) {
    console.log("D");
}else if (nota < 6.0) {
    console.log("F");
}else
    console.log("Nota Invalida")


