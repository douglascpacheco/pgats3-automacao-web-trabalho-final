const seletores = {
  rodape: 'footer',
  tituloAssinatura: 'footer .single-widget h2',
  email: '#susbscribe_email',
  botaoAssinar: '#subscribe',
  mensagemSucesso: '#success-subscribe .alert-success',
};

function rolarAteORodape() {
  cy.get(seletores.rodape).scrollIntoView();
}

function validarTituloDeAssinaturaVisivel() {
  cy.get(seletores.tituloAssinatura)
    .should('be.visible')
    .and('contain', 'Subscription');
}

function inscreverEmail(email) {
  cy.get(seletores.email).type(email);
  cy.get(seletores.botaoAssinar).click();
}

function validarInscricaoRealizada() {
  cy.get(seletores.mensagemSucesso)
    .should('be.visible')
    .and('have.text', 'You have been successfully subscribed!');
}

module.exports = {
  rolarAteORodape,
  validarTituloDeAssinaturaVisivel,
  inscreverEmail,
  validarInscricaoRealizada,
};
