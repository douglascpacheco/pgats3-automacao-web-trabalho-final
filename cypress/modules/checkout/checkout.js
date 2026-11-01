const seletores = {
  titulo: 'h2.heading',
  enderecoEntrega: '#address_delivery',
  enderecoCobranca: '#address_invoice',
  comentario: 'textarea[name="message"]',
  realizarPedido: 'a[href="/payment"]',
};
function validarResumoDoPedido() {
  cy.get(seletores.titulo).contains('Address Details').should('be.visible');
  cy.get(seletores.titulo).contains('Review Your Order').should('be.visible');
  cy.get(seletores.enderecoEntrega).should('be.visible');
  cy.get(seletores.enderecoCobranca).should('be.visible');
}
function realizarPedido(comentario) {
  cy.get(seletores.comentario).type(comentario);
  cy.get(seletores.realizarPedido).click();
}
module.exports = { validarResumoDoPedido, realizarPedido };