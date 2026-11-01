const inicio = require('../modules/inicio/inicio');
const cadastro = require('../modules/cadastro/cadastro');
const login = require('../modules/login/login');
const conta = require('../modules/conta/conta');
const carrinho = require('../modules/carrinho/carrinho');
const checkout = require('../modules/checkout/checkout');
const pagamento = require('../modules/pagamento/pagamento');

function criarUsuario(caso) {
  return {
    nome: 'PGATS Web',
    email: `pgats-web-${caso}-${Date.now()}@mail.com`,
    senha: '12345',
    diaNascimento: '1',
    mesNascimento: 'September',
    anoNascimento: '1910',
    primeiroNome: 'PGATS',
    sobrenome: 'Web',
    empresa: 'PGATS',
    endereco: 'Rua Testes',
    pais: 'Australia',
    estado: 'Vitoria',
    cidade: 'Melbourne',
    codigoPostal: '0000-0000',
    telefone: '119999999',
  };
}
const cartao = {
  nome: 'PGATS WEB',
  numero: '4111111111111111',
  cvc: '123',
  mes: '12',
  ano: '2030',
};

describe('Pedidos - CT15 e CT16', () => {
  it('CT15 - deve finalizar uma compra após cadastrar um usuário', () => {
    const usuario = criarUsuario('ct15');
    inicio.abrirPaginaInicial();
    inicio.validarPaginaInicialVisivel();
    conta.abrirCadastroOuLogin();
    cadastro.cadastrarUsuario(usuario);
    cadastro.continuarAposCadastro();
    login.validarUsuarioAutenticado(usuario.nome);
    carrinho.adicionarProdutosAoCarrinho();
    carrinho.abrirCarrinho();
    carrinho.prosseguirParaCheckout();
    checkout.validarResumoDoPedido();
    checkout.realizarPedido('Pedido de teste CT15.');
    pagamento.preencherPagamento(cartao);
    pagamento.confirmarPagamentoEValidarPedido();
    conta.excluirConta();
  });

  it('CT16 - deve finalizar uma compra após realizar login', () => {
    const usuario = criarUsuario('ct16');
    cadastro.cadastrarUsuario(usuario);
    cadastro.continuarAposCadastro();
    login.validarUsuarioAutenticado(usuario.nome);
    conta.sairDaConta();

    inicio.abrirPaginaInicial();
    inicio.validarPaginaInicialVisivel();
    conta.abrirCadastroOuLogin();
    login.efetuarLogin(usuario.email, usuario.senha);
    login.validarUsuarioAutenticado(usuario.nome);
    carrinho.adicionarProdutosAoCarrinho();
    carrinho.abrirCarrinho();
    carrinho.prosseguirParaCheckout();
    checkout.validarResumoDoPedido();
    checkout.realizarPedido('Pedido de teste CT16.');
    pagamento.preencherPagamento(cartao);
    pagamento.confirmarPagamentoEValidarPedido();
    conta.excluirConta();
  });
});