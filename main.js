
var numeros = [];
var i = 0;

var valorDigitado = document.getElementById("valorDigitado");
var botaoGravarValor = document.getElementById("gravarValor");
var botaoresultado = document.getElementById("resultado");

function adicionarNumero() {
  numeros[i] = parseInt(valorDigitado.value);
  i++;
  valorDigitado.value = " ";
}

botaoGravarValor.onclick = adicionarNumero;

function retornaMaiorNumero() {
  var maiorNumero = 0;

  for(var i = 0; i<numeros.length; i++) {
    if(maiorNumero < numeros[i]) {
      maiorNumero = numeros[i];
    }
  }

  document.write("O maior valor contido no array é: " + maiorNumero + "<br>");
  document.write("O array de números: " + numeros);
}

resultado.onclick = retornaMaiorNumero;
