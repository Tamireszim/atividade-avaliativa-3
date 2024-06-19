import leia from "readline-sync";

var nota01 = leia.questionFloat("Informe nota 01: ");
var nota02 = leia.questionFloat("Informe nota 02: ");
var nota03 = leia.questionFloat("Informe nota 03: ");

var peso01 = leia.questionFloat("Informe o peso 01: ");
var peso02 = leia.questionFloat("Informe o peso 02: ");
var peso03 = leia.questionFloat("Informe o peso 03: ");

var mediaPond = (nota01 * peso01 + nota02 * peso02 + nota03 * peso03) / (peso01 + peso02 + peso03)
    console.log("Sua media ficou: " + mediaPond)

//Média Ponderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)