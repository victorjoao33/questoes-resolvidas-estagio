function verificarFibonacci(numero){
    let a = 0;
    let b = 1;
    while (b < numero0){
        let temp = b;
        b = a + b;
        a = temp;
    }
    if (b === numero){
        return '${numero} pertence à sequência de Fibonacci.';
    } else {
        return '${numero} não pertence à sequência de Fibonacci.';
    }
}

// Exemplo de uso 
console.log(verificarFibonacci(13)); //saída 13 pertence á sequência de Fibonacci 
console.log(verificarFibonacci(7)); //saída 7 não pertence a sequência de Fibonacci 