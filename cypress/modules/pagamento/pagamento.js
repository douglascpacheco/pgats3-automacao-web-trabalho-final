const seletores = {
  formulario: '#payment-form',
  nome: '[data-qa="name-on-card"]',
  numero: '[data-qa="card-number"]',
  cvc: '[data-qa="cvc"]',
  mes: '[data-qa="expiry-month"]',
  ano: '[data-qa="expiry-year"]',
  pagar: '[data-qa="pay-button"]',
  sucesso: '#success_message',
};
function preencherPagamento(cartao) {
  cy.get(seletores.nome).type(cartao.nome);
  cy.get(seletores.numero).type(cartao.numero);
  cy.get(seletores.cvc).type(cartao.cvc);
  cy.get(seletores.mes).type(cartao.mes);
  cy.get(seletores.ano).type(cartao.ano);
}
function confirmarPagamentoEValidarPedido() {
  cy.get(seletores.formulario).then(($formulario) => {
    let mensagemValidada = false;
    // A aplicação exibe a mensagem no submit e logo navega para payment_done.
    // Observar o evento permite validar o texto real sem impedir o envio.
    $formulario.one('submit', () => {
      const mensagem = $formulario.find(seletores.sucesso);
      expect(mensagem, 'confirmação antes do redirecionamento').to.be.visible;
      expect(mensagem.text()).to.contain('Your order has been placed successfully!');
      mensagemValidada = true;
    });
    cy.get(seletores.pagar).click().then(() => {
      expect(mensagemValidada, 'mensagem de sucesso observada no envio').to.equal(true);
    });
  });
}
module.exports = { preencherPagamento, confirmarPagamentoEValidarPedido };