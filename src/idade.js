function idade(anoNascimento, anoAtual) {
    const idade = anoAtual - anoNascimento;
  
    if (idade < 14) {
      return 'criança';
    } else if (idade < 18) {
      return 'adolescente';
    } else if (idade < 65) {
      return 'adulto';
    } else if (idade > 65 ) {
      return 'idoso';
    } else {
      return 'Invalid values';
    }
  }
  
  module.exports = idade;