class Pirata {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = "pirata";
    }
  
    atacar() {
      console.log(`O pirata ${this.nome} atacou usando sabre`);
    }
  }
  
  // Exemplo de uso da classe Pirata
  const pirata = new Pirata("Barba Negra", 45);
  
  pirata.atacar();