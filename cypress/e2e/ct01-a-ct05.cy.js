const cadastro = require('../modules/cadastro/cadastro');
const login = require('../modules/login/login');
const logout = require('../modules/logout/logout');
const conta = require('../modules/conta/conta');

function criarUsuarioDeTeste() {
  return {
    nome: 'PGATS Web',
    email: `pgats-web${Date.now()}@mail.com`,
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

describe('Cadastro e Login - CT01 a CT05', () => {
  it('CT01 - deve cadastrar um novo usuário', () => {
    const usuario = criarUsuarioDeTeste();

    cadastro.cadastrarUsuario(usuario);
    cadastro.continuarAposCadastro();
    login.validarUsuarioAutenticado(usuario.nome);
    conta.excluirConta();
  });

  it('CT02 - deve realizar login com credenciais corretas', () => {
    const usuario = criarUsuarioDeTeste();

    cadastro.cadastrarUsuario(usuario);
    cadastro.continuarAposCadastro();
    login.validarUsuarioAutenticado(usuario.nome);
    logout.efetuarLogout();
    logout.validarUsuarioDesconectado();
    login.acessarLogin();
    login.efetuarLogin(usuario.email, usuario.senha);
    login.validarUsuarioAutenticado(usuario.nome);
    conta.excluirConta();
  });

  it('CT03 - deve exibir erro ao realizar login com credenciais incorretas', () => {
    const usuario = criarUsuarioDeTeste();

    login.acessarLogin();
    login.efetuarLogin(usuario.email, '54321');
    login.validarMensagemDeCredenciaisInvalidas();
  });

  it('CT04 - deve realizar logout de um usuário autenticado', () => {
    const usuario = criarUsuarioDeTeste();

    cadastro.cadastrarUsuario(usuario);
    cadastro.continuarAposCadastro();
    login.validarUsuarioAutenticado(usuario.nome);
    logout.efetuarLogout();
    logout.validarUsuarioDesconectado();
    login.acessarLogin();
    login.efetuarLogin(usuario.email, usuario.senha);
    login.validarUsuarioAutenticado(usuario.nome);
    logout.efetuarLogout();
    logout.validarUsuarioDesconectado();
    login.acessarLogin();
    login.efetuarLogin(usuario.email, usuario.senha);
    conta.excluirConta();
  });

  it('CT05 - deve exibir erro ao cadastrar um e-mail já existente', () => {
    const usuario = criarUsuarioDeTeste();

    cadastro.cadastrarUsuario(usuario);
    cadastro.continuarAposCadastro();
    login.validarUsuarioAutenticado(usuario.nome);
    logout.efetuarLogout();
    logout.validarUsuarioDesconectado();
    cadastro.iniciarCadastro(usuario);
    cadastro.validarMensagemDeEmailExistente();
    login.acessarLogin();
    login.efetuarLogin(usuario.email, usuario.senha);
    conta.excluirConta();
  });
});
