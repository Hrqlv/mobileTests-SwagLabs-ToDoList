const { expect } = require('@wdio/globals');
const { $ } = require('@wdio/globals');
const { obterElementoPorID, obterElementoPorTexto } = require('../../suporte/comandos')
const Page = require('./page');


class TestsE2EPage extends Page {

    async habilitarPermiçoes() {
        await $(obterElementoPorID({ testID: 'com.android.permissioncontroller:id/permission_allow_button' })).click()
    }

    async pularEtapa() {
        await $(obterElementoPorID({ testID: 'com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip' })).click()
    }

    async validarTituloInicial() {
        await expect($(obterElementoPorID({ testID: 'com.socialnmobile.dictapps.notepad.color.note:id/logo_image' }))).toBeDisplayed({ timeout: 5000 })
    }

    async clicarBtnAddTarefa() {
        await $(obterElementoPorID({ testID: 'com.socialnmobile.dictapps.notepad.color.note:id/main_btn1' })).click()
    }

    async clicarBtnCheckList() {
        await $(obterElementoPorTexto('Checklist')).click()
    }

    async addItem() {
        await $(obterElementoPorTexto('Add Item')).click()
        await $(obterElementoPorID({ testID: 'com.socialnmobile.dictapps.notepad.color.note:id/edit' })).setValue('Realizar Testes')
        await $(obterElementoPorTexto('OK')).click()
    }

    async validarItemEscrito() {
        await expect($(obterElementoPorID({ testID: 'com.socialnmobile.dictapps.notepad.color.note:id/text' }))).toBeDisplayed()
    }
}

module.exports = { TestsE2EPage };