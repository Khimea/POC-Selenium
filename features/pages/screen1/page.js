const elements = require("./obj").obj


let productText = "";
const { By, until } = require("selenium-webdriver");

class page {


    pasouno = async(driver) => {
        await driver.get('https://bstackdemo.com/');
    }
    
    pasodos = async(driver) => {
        await driver.wait(until.elementLocated(elements.elemento1));
        productText = await elements.elemento2().getText();
        await elements.elemento3().click();
        return productText
    }
}
module.exports = new page