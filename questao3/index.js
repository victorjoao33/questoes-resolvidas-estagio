// Questão a)
function sequenciaA(n) {
    return 2 * n + 1;
  }
  
  // Questão b)
  function sequenciaB(n) {
    return Math.pow(2, n);
  }
  
  // Questão c)
  function sequenciaC(n) {
    return Math.pow(n, 2);
  }
  
  // Questão d)
  function sequenciaD(n) {
    return Math.pow(2 * n - 4, 2);
  }
  
  // Questão e)
  function sequenciaE(n) {
    if (n < 2) {
      return 1;
    }
    return sequenciaE(n - 1) + sequenciaE(n - 2);
  }
  
  
  // Teste para a questão a)
  console.log(sequenciaA(4)); // Saída: 9
  console.log(verificaSequencia(sequenciaA, 9)); // Saída: true
  
  // Teste para a questão b)
  console.log(sequenciaB(6)); // Saída: 64
  console.log(verificaSequencia(sequenciaB, 30)); // Saída: false
  
  // Teste para a questão c)
  console.log(sequenciaC(7)); // Saída: 49
  console.log(verificaSequencia(sequenciaC, 5)); // Saída: false
  
  // Teste para a questão d)
  console.log(sequenciaD(4)); // Saída: 64
  console.log(verificaSequencia(sequenciaD, 20)); // Saída: false
  
  // Teste para a questão e)
  console.log(sequenciaE(6)); // Saída: 13
  console.log(verificaSequencia(sequenciaE, 5)); // Saída: true

  