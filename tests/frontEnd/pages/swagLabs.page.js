const { faker } = require('@faker-js/faker');
const { expect } = require('@wdio/globals');
const { $ } = require('@wdio/globals');
const { obterElementoPorID, obterElementoPorTexto, scrollarEAguardarClique } = require('../../../suporte/comandos')
const Page = require('./page');

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const zipCode = faker.location.zipCode();

class SwagLabsPage extends Page {

 async realizarLogin() {
   await $('~test-Username').setValue("standard_user")
   await $('~test-Password').setValue("secret_sauce")
   await $('~test-LOGIN').click()
 }

 async validarTelaPrincipal() {
   await expect($('//android.widget.ImageView').isDisplayed()).toBeTruthy();
   await expect($(obterElementoPorTexto('Checklist')).isDisplayed()).toBeTruthy()
 }

 async adicionarProdutoAoCarrinho() {
   await $('~test-ADD TO CART').click()
 }

 async verCarrinho() {
   await $('~test-Cart').click()
 }

 async validarInfoCarrinho() {
   await expect($(obterElementoPorTexto('YOUR CART')).isDisplayed()).toBeTruthy()
   await expect($('android.view.ViewGroup').isDisplayed()).toBeTruthy()
 }

 async btnCheckout() {
   await $('~test-CHECKOUT').click()
 }

 async infoCheckout() {
   await expect($(obterElementoPorTexto('CHECKOUT: INFORMATION')).isDisplayed()).toBeTruthy()
   await $('~test-First Name').setValue(firstName)
   await $('~test-Last Name').setValue(lastName)
   await $('~test-Zip/Postal Code').setValue(zipCode)
   await $('~test-CONTINUE').click()
   await expect($(obterElementoPorTexto('Payment Information:')).isDisplayed()).toBeTruthy()
   await expect($(obterElementoPorTexto('Shipping Information:')).isDisplayed()).toBeTruthy()
   await expect($(obterElementoPorTexto('Total: $32.39')).isDisplayed()).toBeTruthy()
   await scrollarEAguardarClique('test-FINISH', 'down');
   await driver.pause(3000);  
   await expect($(obterElementoPorTexto('THANK YOU FOR YOU ORDER')).isDisplayed()).toBeTruthy()
 }
}

module.exports = { SwagLabsPage };