'use strict';
var page = require ('../pages/screen1/page');
var productText = "";

var assert = require('assert');
const { Given, When, Then } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");

Given(/^Dirigirse a bstackdemo website/, async function () {
  await page.pasouno(driver);
});

When(/^Añadir producto al carrito/, async function () {
  productText = await  page.pasodos(driver);

});

Then(/^Verificar que vemos el producto en el carro/, async function () {
  await this.driver.wait(until.elementLocated(By.className("float-cart__content")));
  await this.driver.findElement(By.className("float-cart__content"));

  await this.driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]')));
  let productCartText = await this.driver
          .findElement(
            By.xpath(
              '//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]'
            )
          )
          .getText();

  assert.equal(productCartText, productText, 'Expected product to be ' + productText)
});
