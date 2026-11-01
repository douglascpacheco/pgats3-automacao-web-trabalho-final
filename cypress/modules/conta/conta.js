const seletores = {
  login: '.navbar-nav a[href="/login"]',
  logout: '.navbar-nav a[href="/logout"]',
  excluir: 'a[href="/delete_account"]',
  contaExcluida: '[data-qa="account-deleted"]',
  continuar: '[data-qa="continue-button"]',
};
function abrirCadastroOuLogin() {
  cy.get(seletores.login).click();
}
function sairDaConta() {
  cy.get(seletores.logout).click();
  cy.location('pathname').should('eq', '/login');
}
function excluirConta() {
  cy.get(seletores.excluir).click();
  cy.get(seletores.contaExcluida).should('be.visible').and('contain', 'Account Deleted!');
  cy.get(seletores.continuar).click();
}
module.exports = { abrirCadastroOuLogin, sairDaConta, excluirConta };