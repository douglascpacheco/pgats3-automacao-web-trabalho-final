const seletores = {
  adicionarProduto: '.productinfo .add-to-cart',
  mensagemProdutoAdicionado: '#cartModal .modal-body p',
  continuarComprando: '#cartModal .close-modal',
  linkCarrinho: '.navbar-nav a[href="/view_cart"]',
  tabelaCarrinho: '#cart_info_table',
  checkout: '.check_out',
};
function adicionarProdutosAoCarrinho() {
  cy.get(seletores.adicionarProduto).eq(0).click();
  cy.get(seletores.mensagemProdutoAdicionado)
    .should('be.visible')
    .and('contain', 'Your product has been added to cart.');
  cy.get(seletores.continuarComprando).should('be.visible').click();
  cy.get(seletores.adicionarProduto).eq(1).click();
  cy.get(seletores.mensagemProdutoAdicionado)
    .should('be.visible')
    .and('contain', 'Your product has been added to cart.');
  cy.get(seletores.continuarComprando).should('be.visible').click();
}
function abrirCarrinho() {
  cy.get(seletores.linkCarrinho).click();
  cy.location('pathname').should('eq', '/view_cart');
  cy.get(seletores.tabelaCarrinho).should('be.visible');
}
function prosseguirParaCheckout() {
  cy.get(seletores.checkout).contains('Proceed To Checkout').click();
}
module.exports = { adicionarProdutosAoCarrinho, abrirCarrinho, prosseguirParaCheckout };