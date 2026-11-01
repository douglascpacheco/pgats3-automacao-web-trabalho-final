const seletores = {
  linkProdutos: 'a[href="/products"]',
  tituloListaProdutos: '.features_items > h2.title',
  listaProdutos: '.features_items',
  cartaoProduto: '.product-image-wrapper',
  linkDetalhesProduto: '.features_items .product-image-wrapper a[href*="/product_details/"]',
  informacoesProduto: '.product-information',
  nomeProduto: '.product-information > h2',
  categoriaProduto: '.product-information > p',
  precoProduto: '.product-information > span > span',
  campoPesquisa: '#search_product',
  botaoPesquisar: '#submit_search',
  tituloPesquisa: '.features_items > h2.title',
  resultadosPesquisa: '.features_items .product-image-wrapper',
};

function acessarListaDeProdutos() {
  cy.get(seletores.linkProdutos).click();
}

function validarListaDeProdutosAberta() {
  cy.get(seletores.tituloListaProdutos)
    .should('be.visible')
    .invoke('text')
    .should('match', /all products/i);
}

function validarListaDeProdutosVisivel() {
  cy.get(seletores.listaProdutos)
    .should('be.visible')
    .find(seletores.cartaoProduto)
    .should('have.length.above', 0);
}

function abrirDetalhesDoPrimeiroProduto() {
  cy.get(seletores.linkDetalhesProduto).first().click();
}

function validarDetalhesDoPrimeiroProduto() {
  cy.url().should('include', '/product_details/');
  cy.get(seletores.informacoesProduto).should('be.visible');
  cy.get(seletores.nomeProduto)
    .should('be.visible')
    .and('have.text', 'Blue Top');
  cy.get(seletores.categoriaProduto)
    .contains('Category: Women > Tops')
    .should('be.visible');
  cy.get(seletores.precoProduto)
    .should('be.visible')
    .and('have.text', 'Rs. 500');
  cy.get(seletores.informacoesProduto)
    .contains('p', 'Availability: In Stock')
    .should('be.visible');
  cy.get(seletores.informacoesProduto)
    .contains('p', 'Condition: New')
    .should('be.visible');
  cy.get(seletores.informacoesProduto)
    .contains('p', 'Brand: Polo')
    .should('be.visible');
}

function pesquisarProduto(nomeProduto) {
  cy.get(seletores.campoPesquisa).type(nomeProduto);
  cy.get(seletores.botaoPesquisar).click();
}

function validarProdutosRelacionadosNaPesquisa(nomeProduto) {
  cy.get(seletores.tituloPesquisa)
    .should('be.visible')
    .invoke('text')
    .should('match', /searched products/i);
  cy.get(seletores.resultadosPesquisa)
    .should('be.visible')
    .should('have.length.above', 0)
    .each(($produto) => {
      cy.wrap($produto).should('contain', nomeProduto);
    });
}

module.exports = {
  acessarListaDeProdutos,
  validarListaDeProdutosAberta,
  validarListaDeProdutosVisivel,
  abrirDetalhesDoPrimeiroProduto,
  validarDetalhesDoPrimeiroProduto,
  pesquisarProduto,
  validarProdutosRelacionadosNaPesquisa,
};
