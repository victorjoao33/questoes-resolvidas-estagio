//Para inverter os caracteres de uma string, podemos criar uma função que percorre a string e adiciona os caracteres em ordem inversa em uma nova string.

function inverterString(str) {
    let novaStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      novaStr += str[i];
    }
    return novaStr;
  }
  
  // Exemplo de uso
  let minhaString = "Hello, world!";
  let minhaStringInvertida = inverterString(minhaString);
  console.log(minhaStringInvertida); // Output: "!dlrow ,olleH"

/* Aqui, a função inverterString recebe a string a ser invertida como parâmetro e cria uma nova string vazia (novaStr). Em seguida, o laço for percorre a string original (str) de trás para frente, adicionando cada caractere na nova string (novaStr) em ordem inversa. Por fim, a função retorna a nova string invertida.

No exemplo de uso, definimos a string "Hello, world!" e a passamos como parâmetro para a função inverterString. A string invertida é armazenada na variável minhaStringInvertida, que é impressa no console com o comando console.log. O resultado é a string invertida !dlrow ,olleH. */