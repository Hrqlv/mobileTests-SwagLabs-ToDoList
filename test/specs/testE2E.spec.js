const { expect } = require('@wdio/globals')
const { TestsE2EPage } = require('../pages/testE2E.page')
const { login } = require('../../fixtures/data')

let testsE2E = new TestsE2EPage();

describe('Realizar login, validar mensagens de erro, adicionar um produto e finalizar compra', () => {
    // beforeEach(async () => {
    //     await testsE2E.validarTituloInicial()
    // })

    it('Realizar login e clicar no botao pra logar', async () => {
        await testsE2E.realizarLogin(login.email, login.senha)
        await testsE2E.clicarBtnEntrar()
    })

    it('Validar Mensagem de erro do login', async () => {
        await testsE2E.realizarLogin('', '')
        await testsE2E.clicarBtnEntrar()
        await testsE2E.validarMensagemErro()
    })
})

