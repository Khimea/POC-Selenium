# POC Selenium + CucumberJS + BrowserStack SDK

[Cucumber-JS](https://github.com/cucumber/cucumber-js) Integration with BrowserStack for E2E functional testing of UI using Selenium and [browserstack-node-sdk](https://www.npmjs.com/package/browserstack-node-sdk).

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

<img src = "https://media-exp1.licdn.com/dms/image/C5112AQHJpZqS4Bxncw/article-cover_image-shrink_600_2000/0/1520185869483?e=1675296000&v=beta&t=1mp98Ivf-d4Qda4GbR4JvDiTXE9KAo91ZfVqku4w2lo" height = "200">

## Run sample build

---

- Clone the repo
- Install dependencies `npm install`
- Set your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings) in [browserstack.yml](browserstack.yml) `npx setup --username userName --key accessKey`
- To run tests on private websites,
  - set browserstackLocal: true at [browserstack.yml](browserstack.yml)
  - run `npm run test:cucumber` or `yarn run test:remoto`

Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)

## Integrate your test suite

---

1. Install browserstack-node-sdk as a dev-dependency

```
npm i -D browserstack-node-sdk
or
yarn add --dev browserstack-node-sdk
```

2. Setup

```
npx setup --username userName --key accessKey
```

- Adds a browserstack.yml file at root of your mocha project with your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings).
- Adds a new command for running tests on browserstack in scripts tag of package.json,

```
"scripts": {
  "test": "cucumber-js [args]",
  "browserstack-test": "browserstack-node-sdk cucumber-js [args]"
},
```
## Pruebas Locales

Para realizar las pruebas locales debemos iniciar un [servidor de selenium](https://www.selenium.dev/downloads/)
El proyecto ya viene configurado para que utilice este servidor de manera [LOCAL](hooks.js) y en chrome.
Para iniciar nuestro servidor debemos ejecutar la siguiente linea de comando
```
java -jar selenium-server-{VERSION}.jar standalone
```
 Mas [INFO](https://www.selenium.dev/documentation/legacy/selenium_2/remote_server/)

## Notes

---

- You can view your test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)
- To test on a different set of browsers, check out our [platform configurator](https://www.browserstack.com/automate/node#setting-os-and-browser)

## Additional Resources

---

- [Documentation for writing Automate test scripts in Node](https://www.browserstack.com/automate/node)
- [Customizing your tests on BrowserStack](https://www.browserstack.com/automate/capabilities)
- [Browsers & mobile devices for selenium testing on BrowserStack](https://www.browserstack.com/list-of-browsers-and-platforms?product=automate)
- [Using REST API to access information about your tests via the command-line interface](https://www.browserstack.com/automate/rest-api)
