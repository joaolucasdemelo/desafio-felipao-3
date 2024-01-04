class Pirata {
    constructor(nome, idade) {
      this.nome = "Luffy";
      this.idade = 19;
      this.tipo = "pirata";
    }
  
    atacar() {
      console.log(`O pirata ${this.nome} atacou usando gomu gomu no rifle`);
    }
  }
  
  // Exemplo de uso da classe Pirata
  const pirata = new Pirata("Monkey D. Luffy", 19);
  
  pirata.atacar();