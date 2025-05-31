//function geradorDeTagsDeIdentificacao(nome) {
  //return 'PANTERA'
//}

export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  return idade >= 1 && porte === 'M';
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  // Supondo: cada kg = 300g de ração
  // Para 14.5 kg -> 14.5 * 300 = 4350g
  return peso * 300;
}

export function decidirTipoDeAtividadePorPorte(porte) {
  const atividades = {
    pequeno: 'brincar dentro de casa',
    medio: 'caminhadas diárias',
    grande: 'atividades ao ar livre'
  };
  return atividades[porte.toLowerCase()];
}

export async function buscarDadoAsync() {
  // Simulando uma função assíncrona com Promise
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pipoca');
    }, 100);
  });
}
