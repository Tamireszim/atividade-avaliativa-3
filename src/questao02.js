import leia from "readline-sync";

var horasTrab = leia.questionFloat("Quantidade de horas trabalhadas: ");
var valorHr = leia.questionFloat("Valor da hora: ");
var desconto = leia.questionFloat("Valor do desconto: ");

var salarioBruto = (horasTrab * valorHr);
    console.log("Seu salario bruto é: R$ "+ salarioBruto);

var descReal = (salarioBruto * (desconto / 100));
    console.log("Seu desconto é de: " + descReal);

var salarioLiq = (salarioBruto - descReal);
    console.log("Seu salario Liquido é: R$ " + salarioLiq);
