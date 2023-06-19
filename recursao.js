// Soma dos números inteiros de 1 a n
function somaNumeros(n) {

  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma += i;
  }
  return soma;

}

// Verifica se um número é par
function ehPar(number) {

  if (number === 0) {
    return true; // par
  } else if (number === 1) {
    return false; // ímpar
  } else {
    // subtrai 2 na chamada recursiva
    return ehPar(number - 2);
  }

}

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

module.exports = { somaNumeros, ehPar, fibonacci };