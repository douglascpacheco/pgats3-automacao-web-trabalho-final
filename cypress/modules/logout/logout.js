const seletores = {
  botaoSair: 'a[href*="logout"]',
  formularioLogin: '[action*="login"]',
  tituloLogin: '.login-form > h2',
};

function efetuarLogout() {
  cy.get(seletores.botaoSair)
    .should('be.visible')
    .click();
}

function validarUsuarioDesconectado() {
  cy.get(seletores.tituloLogin).should('be.visible');
  cy.get(seletores.botaoSair).should('not.exist');
  cy.get(seletores.formularioLogin).should('be.visible');
  cy.url().should('include', 'login');
}

module.exports = {
  efetuarLogout,
  validarUsuarioDesconectado,
};
