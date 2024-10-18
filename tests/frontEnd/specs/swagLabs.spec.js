const { expect } = require('@wdio/globals')
const { SwagLabsPage } = require('../pages/swagLabs.page')

let swagLabs = new SwagLabsPage();

describe('Realizar o login e após fazer o login realizar uma compra com os produtos que desejar', () => {
    it('Realizar login', async () => {
        await driver.pause(3000);
        await swagLabs.realizarLogin();
    })

    it ('Validar tela principal', async () => {
        await swagLabs.validarTelaPrincipal()
    })

    it('Escolher o produto e adicionar ao carrinho', async () => {
      await swagLabs.adicionarProdutoAoCarrinho()
      await swagLabs.verCarrinho()
    })

    it('Validar as informaçoes do produto ao carrinho, continuar a compra e finalizar', async () => {
        await swagLabs.validarInfoCarrinho()
        await swagLabs.btnCheckout()
        await swagLabs.infoCheckout()
    })
})

