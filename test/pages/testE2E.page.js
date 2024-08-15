const { expect } = require('@wdio/globals');
const { $ } = require('@wdio/globals');
const { obterElementoPorID, obterElementoPorTexto } = require('../../suporte/comandos')
const Page = require('./page');


class TestsE2EPage extends Page {

    async validarTituloInicial() {
        await expect($(obterElementoPorTexto('Falta pouco pra matar sua fome!'))).toBeDisplayed({ timeout: 5000 })
        await expect($(obterElementoPorTexto('Faça login e aproveite!'))).toBeDisplayed({ timeout: 5000 })
    }

    async realizarLogin(email, senha) {
        await $(obterElementoPorID({ testID: 'email' })).setValue(email)
        await $(obterElementoPorID({ testID: 'password' })).setValue(senha)
    }

    async clicarBtnEntrar() {
        await $(obterElementoPorID({ testID: 'login-button' })).click()
    }

    async validarMensagemErro() {
        await expect($(obterElementoPorTexto('Erro ao realizar login'))).toBeDisplayed({ timeout: 3000 })
    }
}

module.exports = { TestsE2EPage };