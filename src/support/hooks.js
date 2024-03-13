"use strict";
const utils = require("./utils");
const { Builder, Browser, Capabilities } = require("selenium-webdriver");
const { Before, After } = require("@cucumber/cucumber");

Before(async (scenario) => {
  global.driver = new Builder().forBrowser(Browser.CHROME).build();
  driver.manage().window().maximize();
});

After(async (scenario) => {
  await utils.takeScreenshot(scenario);
  await driver.quit();
});
