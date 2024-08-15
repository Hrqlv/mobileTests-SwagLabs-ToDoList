const { expect } = require('@wdio/globals')
const { TestsE2EPage } = require('../pages/testE2E.page')

let testsE2E = new TestsE2EPage();

describe('Adicionar tarefas em dois formatos como texto e checklist', () => {
    beforeEach(async () => {
        await testsE2E.habilitarPermiçoes()
        await testsE2E.pularEtapa()
        await testsE2E.validarTituloInicial()
    })

    it('Adicionar a tarefa como checklist e texto', async () => {
        // CheckList
        await testsE2E.clicarBtnAddTarefa()
        await testsE2E.clicarBtnCheckList()
        await testsE2E.addItemCheckList()
        await testsE2E.btnSalvar()
        await testsE2E.btnVoltar()

        // Texto
        await testsE2E.clicarBtnAddTarefa()
        await testsE2E.clicarBtnText()
        await testsE2E.addItemText()
        await testsE2E.btnSalvar()
        await testsE2E.btnVoltar()
    })
})

