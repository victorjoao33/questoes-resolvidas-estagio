/*Para resolver esse problema, primeiro precisamos encontrar o tempo que cada veículo leva para se cruzar na rodovia. Podemos utilizar a fórmula de velocidade média:

tempo = distância / velocidade

Para o carro:

tempo_carro = 100 / 110
tempo_carro = 0.91 horas

Para o caminhão, considerando que ele leva 5 minutos a mais para passar em cada pedágio, podemos acrescentar 10 minutos ao tempo total:

tempo_caminhao = 100 / 80 + 0.17
tempo_caminhao = 1.33 horas

Agora que temos os tempos de cada veículo, podemos calcular a distância que cada um percorreu. Como eles saíram de cidades opostas e se encontraram no meio do caminho, sabemos que cada um percorreu metade da distância total:

distancia_carro = 100 / 2
distancia_carro = 50 km

distancia_caminhao = 100 / 2
distancia_caminhao = 50 km

Agora podemos calcular a distância de cada um para a cidade de Ribeirão Preto. Para isso, basta subtrair a distância percorrida pelo veículo da distância total entre Ribeirão Preto e Franca:

distancia_restante_carro = 100 - distancia_carro
distancia_restante_carro = 50 km

distancia_restante_caminhao = 100 - distancia_caminhao
distancia_restante_caminhao = 50 km

Como podemos ver, ambos os veículos percorreram a mesma distância até o ponto de encontro, portanto estarão equidistantes de Ribeirão Preto no momento do encontro.

Para chegar no resultado, podemos considerar que o encontro entre o carro e o caminhão ocorrerá no ponto médio da distância entre as duas cidades, ou seja, após percorrerem 50 km cada um.

O tempo que o carro leva para percorrer os 50 km é dado por:

tempo_carro = distância / velocidade = 50 km / 110 km/h = 0,45 horas = 27 minutos

Já o caminhão, por sua vez, leva um tempo maior para percorrer esses mesmos 50 km, devido aos pedágios:

tempo_caminhão = distância / velocidade - tempo_pedágios = 50 km / 80 km/h - 2 x 5 minutos = 0,5625 horas = 33,75 minutos

Portanto, quando se encontrarem, o caminhão estará mais próximo de Ribeirão Preto do que o carro, uma vez que ele ainda terá percorrido menos tempo nessa direção. */


const distanciaTotal = 100; // km
const velocidadeCarro = 110; // km/h
const velocidadeCaminhao = 80; // km/h
const tempoPedagio = 5 / 60; // 5 minutos convertidos para horas

// Calcula o tempo que o carro leva para chegar ao ponto de encontro
const tempoCarro = distanciaTotal / velocidadeCarro;

// Calcula o tempo que o caminhão leva para chegar ao ponto de encontro, considerando os pedágios
const tempoCaminhao = (distanciaTotal / velocidadeCaminhao) + (tempoPedagio * 2);

// Calcula a distância percorrida por cada veículo até o ponto de encontro
const distanciaCarro = (velocidadeCarro * tempoCarro) / 2;
const distanciaCaminhao = (velocidadeCaminhao * tempoCaminhao) / 2;

// Calcula a distância restante até Ribeirão Preto para cada veículo
const distanciaRestanteCarro = distanciaTotal / 2 - distanciaCarro;
const distanciaRestanteCaminhao = distanciaTotal / 2 - distanciaCaminhao;

// Verifica qual veículo está mais próximo de Ribeirão Preto
if (distanciaRestanteCarro < distanciaRestanteCaminhao) {
  console.log('O carro está mais próximo de Ribeirão Preto');
} else if (distanciaRestanteCaminhao < distanciaRestanteCar);
