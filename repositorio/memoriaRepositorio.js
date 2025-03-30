const repositorioMemoria = require('../repositorios/memoriaRepositorio.js');

describe('Testando as funções de respostas no repositorioMemoria', () => {
  
  it('Deve retornar 0 respostas para uma pergunta sem respostas', () => {
    // Pergunta 4 não tem respostas
    const numRespostas = repositorioMemoria.recuperar_num_respostas(4);
    expect(numRespostas).toBe(0); // Espera que o número de respostas seja 0
  });

  it('Deve retornar respostas corretamente para uma pergunta com respostas', () => {
    // Pergunta 1 tem respostas
    const respostas = repositorioMemoria.recuperar_todas_respostas(1);
    expect(respostas.length).toBeGreaterThan(0);  // Espera que haja respostas
    expect(respostas).toContain('Belo Horizonte');  // Verifica se uma das respostas está presente
  });

  it('Deve retornar uma lista vazia quando não houver respostas para a pergunta', () => {
    // Pergunta 4 não existe em `respostas`, logo retorna uma lista vazia
    const respostas = repositorioMemoria.recuperar_todas_respostas(4); 
    expect(respostas).toEqual([]); // Espera que o retorno seja uma lista vazia
  });

  it('Deve retornar a pergunta corretamente', () => {
    const pergunta = repositorioMemoria.recuperar_pergunta(1);
    expect(pergunta).toBeTruthy();  // Verifica se a pergunta existe
    expect(pergunta.texto).toBe('Qual a capital de MG?');  // Verifica o texto da pergunta
  });

  it('Deve retornar undefined para uma pergunta que não existe', () => {
    const perguntaInexistente = repositorioMemoria.recuperar_pergunta(99);  // Pergunta com id 99 não existe
    expect(perguntaInexistente).toBeUndefined();  // Espera que retorne undefined
  });

});
