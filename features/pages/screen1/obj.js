const { By, until, WebElement } = require("selenium-webdriver");

let obj = {
elemento1 : By.xpath('//*[@id="1"]/p'),
elemento2 :()=> driver.findElement(By.xpath('//*[@id="1"]/p')) ,
elemento3 :()=> driver.findElement({xpath: '//*[@id="1"]/div[4]'})

}

module.exports =
{
    obj,
}