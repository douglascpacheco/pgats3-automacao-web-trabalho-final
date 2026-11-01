const inicio = require('../modules/inicio/inicio');
const produtos = require('../modules/produto/produtos');
const assinatura = require('../modules/assinatura/assinatura');

describe('Produtos e Inscrição - CT08 a CT10', () => {
  it('CT08 - deve exibir a lista de produtos e os detalhes do primeiro produto', () => {
    inicio.abrirPaginaInicial();
    inicio.validarPaginaInicialVisivel();
    produtos.acessarListaDeProdutos();
    produtos.validarListaDeProdutosAberta();
    produtos.validarListaDeProdutosVisivel();
    produtos.abrirDetalhesDoPrimeiroProduto();
    produtos.validarDetalhesDoPrimeiroProduto();
  });

  it('CT09 - deve pesquisar produtos pelo nome', () => {
    const nomeProduto = 'Blue Top';

    inicio.abrirPaginaInicial();
    inicio.validarPaginaInicialVisivel();
    produtos.acessarListaDeProdutos();
    produtos.validarListaDeProdutosAberta();
    produtos.pesquisarProduto(nomeProduto);
    produtos.validarProdutosRelacionadosNaPesquisa(nomeProduto);
  });

  it('CT10 - deve realizar inscrição na página inicial', () => {
    const email = `pgats-web-assinatura-${Date.now()}@mail.com`;

    inicio.abrirPaginaInicial();
    inicio.validarPaginaInicialVisivel();
    assinatura.rolarAteORodape();
    assinatura.validarTituloDeAssinaturaVisivel();
    assinatura.inscreverEmail(email);
    assinatura.validarInscricaoRealizada();
  });
});
