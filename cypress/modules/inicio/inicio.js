const seletores = {
  carrosselInicial: '.carousel',
  tituloInicial: 'h2',
};

function abrirPaginaInicial() {
  cy.visit('/');
}

function validarPaginaInicialVisivel() {
  cy.get(seletores.carrosselInicial)
    .first()
    .should('be.visible')
    .within(() => {
      cy.get(seletores.tituloInicial)
        .should('be.visible')
        .and('contain', 'Full-Fledged practice website for Automation Engineers');
    });
}

module.exports = {
  abrirPaginaInicial,
  validarPaginaInicialVisivel,
};
