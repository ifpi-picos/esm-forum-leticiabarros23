describe('Testes do Frontend', () => {
    it('Deve adicionar uma pergunta e exibir na lista', () => {
      // Acessa a página principal
      cy.visit('http://localhost:3000');
  
      // Envia uma pergunta
      cy.get('textarea[name="pergunta"]').type('Qual é o seu nome?');
      cy.get('input[type="submit"]').click();
  
      // Verifica se a pergunta foi adicionada
      cy.contains('Qual é o seu nome?').should('be.visible');
    });
  });
  