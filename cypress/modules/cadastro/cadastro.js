const seletores = {
  linkLogin: 'a[href*="login"]',
  nomeCadastro: '[data-qa="signup-name"]',
  emailCadastro: '[data-qa="signup-email"]',
  botaoIniciarCadastro: '[data-qa="signup-button"]',
  genero: '#id_gender2',
  senha: '[data-qa="password"]',
  diaNascimento: '[data-qa="days"]',
  mesNascimento: '[data-qa="months"]',
  anoNascimento: '[data-qa="years"]',
  newsletter: '#newsletter',
  receberOfertas: '#optin',
  primeiroNome: '[data-qa="first_name"]',
  sobrenome: '[data-qa="last_name"]',
  empresa: '[data-qa="company"]',
  endereco: '[data-qa="address"]',
  pais: '[data-qa="country"]',
  estado: '[data-qa="state"]',
  cidade: '[data-qa="city"]',
  codigoPostal: '[data-qa="zipcode"]',
  telefone: '[data-qa="mobile_number"]',
  botaoCriarConta: '[data-qa="create-account"]',
  contaCriada: '[data-qa="account-created"]',
  botaoContinuar: '[data-qa="continue-button"]',
  mensagemEmailExistente: 'form[action*="signup"] p',
};

function iniciarCadastro(usuario) {
  cy.visit('/');
  cy.get(seletores.linkLogin).click();
  cy.get(seletores.nomeCadastro).type(usuario.nome);
  cy.get(seletores.emailCadastro).type(usuario.email);
  cy.get(seletores.botaoIniciarCadastro).click();
}

function preencherDadosDoUsuario(usuario) {
  cy.get(seletores.genero).check();
  cy.get(seletores.senha).type(usuario.senha);
  cy.get(seletores.diaNascimento).select(usuario.diaNascimento);
  cy.get(seletores.mesNascimento).select(usuario.mesNascimento);
  cy.get(seletores.anoNascimento).select(usuario.anoNascimento);
  cy.get(seletores.newsletter).check();
  cy.get(seletores.receberOfertas).check();
  cy.get(seletores.primeiroNome).type(usuario.primeiroNome);
  cy.get(seletores.sobrenome).type(usuario.sobrenome);
  cy.get(seletores.empresa).type(usuario.empresa);
  cy.get(seletores.endereco).type(usuario.endereco);
  cy.get(seletores.pais).select(usuario.pais);
  cy.get(seletores.estado).type(usuario.estado);
  cy.get(seletores.cidade).type(usuario.cidade);
  cy.get(seletores.codigoPostal).type(usuario.codigoPostal);
  cy.get(seletores.telefone).type(usuario.telefone);
  cy.get(seletores.botaoCriarConta).click();
}

function cadastrarUsuario(usuario) {
  iniciarCadastro(usuario);
  preencherDadosDoUsuario(usuario);
  validarCadastroRealizado();
}

function validarCadastroRealizado() {
  cy.get(seletores.contaCriada)
    .should('be.visible')
    .and('contain', 'Account Created!');
}

function continuarAposCadastro() {
  cy.get(seletores.botaoContinuar).click();
}

function validarMensagemDeEmailExistente() {
  cy.get(seletores.mensagemEmailExistente)
    .should('be.visible')
    .and('contain', 'Email Address already exist!');
}

module.exports = {
  iniciarCadastro,
  cadastrarUsuario,
  continuarAposCadastro,
  validarMensagemDeEmailExistente,
};
