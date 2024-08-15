const { expect } = require('@wdio/globals')
const { TestsE2EPage } = require('../pages/testE2E.page')

let testsE2E = new TestsE2EPage();

describe('Adicionar tarefas em dois formatos como texto e checklist', () => {
    beforeEach(async () => {
        await testsE2E.habilitarPermiçoes()
        await testsE2E.pularEtapa()
    })

    it('Adicionar a tarefa como checklist e validar a tarefa criada', async () => {
        await testsE2E.validarTituloInicial()
        await testsE2E.clicarBtnAddTarefa()
        await testsE2E.clicarBtnCheckList()
        await testsE2E.addItem()
        await testsE2E.validarItemEscrito() 
    })
})

