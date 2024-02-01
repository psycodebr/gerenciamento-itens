const readline = require('readline');

// Definição da classe ItemMagico
class ItemMagico {
  constructor(tipo, dano, resistencia) {
    this.tipo = tipo;
    this.dano = dano;
    this.resistencia = resistencia;
  }

  calcularDano() {
    return this.tipo === 'arma' ? this.dano * 2 : this.dano;
  }
}

// Cria uma interface de leitura para receber entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
rl.question('Digite o tipo do item mágico: ', (tipoItem) => {
  rl.question('Digite o dano do item mágico: ', (danoItem) => {
    rl.question('Digite a resistência do item mágico: ', (resistenciaItem) => {
      // Cria um objeto ItemMagico personalizado com base no tipo escolhido
      const itemPersonalizado = new ItemMagico(tipoItem, parseInt(danoItem), parseInt(resistenciaItem));

      // Imprime os atributos do item personalizado
      console.log("Tipo: " + itemPersonalizado.tipo);
      console.log("Dano: " + itemPersonalizado.dano);
      console.log("Resistencia: " + itemPersonalizado.resistencia);

      // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
      const danoTotal = itemPersonalizado.calcularDano();
      console.log("Dano em combate: " + danoTotal);

      // Fecha a interface de leitura
      rl.close();
    });
  });
});
