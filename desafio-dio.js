// Definição da classe ItemMagico
class ItemMagico {
    // Construtor que recebe todos os atributos referentes ao item mágico
    constructor(tipo, dano, resistencia) {
      this.tipo = tipo;
      this.dano = dano;
      this.resistencia = resistencia;
    }
  
    calcularDano() {
      return this.tipo === 'arma' ? this.dano * 2 : this.dano;
    }
  }
  
  // Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
  const tipoItem = gets();
  const danoItem = parseInt(gets());
  const resistenciaItem = parseInt(gets());
  
  // Cria um objeto ItemMagico personalizado com base no tipo escolhido
  const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);
  
  // Imprime os atributos do item personalizado
  print("Tipo: " + itemPersonalizado.tipo);
  print("Dano: " + itemPersonalizado.dano);
  print("Resistencia: " + itemPersonalizado.resistencia);
  
  // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
  const danoTotal = itemPersonalizado.calcularDano();
  print("Dano em combate: " + danoTotal);  