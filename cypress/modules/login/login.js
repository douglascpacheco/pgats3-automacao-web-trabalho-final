const seletores = {
  email: '[data-qa="login-email"]',
  senha: '[data-qa="login-password"]',
  botaoEntrar: '[data-qa="login-button"]',
  usuarioAutenticado: '.navbar-nav li',
  mensagemCredenciaisInvalidas: 'form[action*="login"] > p',
};

function acessarLogin() {
  cy.visit('/login');
}

function efetuarLogin(email, senha) {
  cy.get(seletores.email).type(email);
  cy.get(seletores.senha).type(senha);
  cy.get(seletores.botaoEntrar).click();
}

function validarUsuarioAutenticado(nome) {
  cy.get(seletores.usuarioAutenticado)
    .contains(nome)
    .should('be.visible');
}

function validarMensagemDeCredenciaisInvalidas() {
  cy.get(seletores.mensagemCredenciaisInvalidas)
    .should('be.visible')
    .and('contain', 'Your email or password is incorrect!');
}

module.exports = {
  acessarLogin,
  efetuarLogin,
  validarUsuarioAutenticado,
  validarMensagemDeCredenciaisInvalidas,
};
