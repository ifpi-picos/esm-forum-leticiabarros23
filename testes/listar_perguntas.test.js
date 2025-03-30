const modelo = require('../modelo.js');

// mock correto do repositório
const mock_bd = {
  recuperar_todas_perguntas: jest.fn().mockResolvedValue([
    { id_pergunta: 1, texto: 'Qual a capital de MG?', id_usuario: 1 },
    { id_pergunta: 2, texto: 'Qual a capital de RJ?', id_usuario: 1 },
    { id_pergunta: 3, texto: 'Qual a capital de SP?', id_usuario: 1 },
  ]),
  recuperar_num_respostas: jest
    .fn()
    .mockResolvedValueOnce(5)
    .mockResolvedValueOnce(10)
    .mockResolvedValueOnce(15)
};

// troca o repositório real pelo mock
modelo.reconfig_repositorio(mock_bd);

test('Testando listar três perguntas', async () => {
  const perguntas = await modelo.listar_perguntas();

  expect(perguntas.length).toBe(3);
  expect(perguntas[0].texto).toBe('Qual a capital de MG?');
  expect(perguntas[1].texto).toBe('Qual a capital de RJ?');
  expect(perguntas[2].texto).toBe('Qual a capital de SP?');
  expect(perguntas[0].num_respostas).toBe(5);
  expect(perguntas[1].num_respostas).toBe(10);
  expect(perguntas[2].num_respostas).toBe(15);
});
