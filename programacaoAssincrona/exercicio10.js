// Exercício 10: Async/Await com Tratamento de Erros
// Escreva uma função assíncrona obterDadosComFallback que usa try...catch e await para buscar dados de uma API. Se ocorrer um erro, utilize um valor de callback e imprima-o no console.

const times = [
  "Flamengo",
  "Cruzeiro",
  "Gremio",
  "Coritiba",
  "Santos",
  "Fluminense",
  "Fortaleza",
  "Ceara",
  "Remo",
  "Atletico Mineiro",
  "Internacional",
  "Botafogo",
];

function descobrirCampeaoBrasileiro2023() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const numeroAleatorioEntre0e1 = Math.random();
        if (numeroAleatorioEntre0e1 < 0.2) {
          resolve(Math.floor(times.length * Math.random())); 
        }
        reject(new Error('erro buscando o time campeão!'))
      });
    }, 1500);
}


async function obterDadosCallback() {
  try {
    const indice = await descobrirCampeaoBrasileiro2023();
    console.log(`Time campeão do campeonato brasileiro de 2023" ${times[indice]}`)
  } catch (error) {
    console.error(error.message);
    console.log(`Já que não consegui adivinhar o time , vamos fazer uma aposta mais lógica. O time campeão será o Flamengo!`);
  }
  
}

obterDadosCallback();