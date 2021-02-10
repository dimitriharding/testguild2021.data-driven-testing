<p align="center">
    <img src="https://bit.ly/2Orz4fB" alt="guild image" width="100%" height="100%"/>
  <h3 align="center">Data Driven Testing</h3>
  <p align="center">Reducing Test Code and Increasing Test Coverage</p>
</p>

---

There are 3 projects in this repo and they are all self contained.

All you have to do is clone this repo:

```sh
cd project-name # cy-project | nightwatch-project | webdriverio-project
```

```sh
npm install
```

```sh
npm run test
```

cy-project - [Cypress](https://www.cypress.io)

nightwatch-project - [NightwatchJS](https://nightwatchjs.org)

webdriverio-project - [WebdriverIO](https://webdriver.io)

---

### Application Under Test

[Github Repo](https://github.com/dimitriharding/tax-by-state)

[Website Url](https://tax-by-state.vercel.app)

<p align="center">
    <img src="https://bit.ly/3p6aP2X" alt="test application" width="100%" height="100%"/>
  <h3 align="center"><a href="https://tax-by-state.vercel.app/">Tax By State</a></h3>
  <p align="center">Calculates the tax for items based on the state.</p>
  <p align="center">Created by: Yours Truly</p>
</p>

---

Challenge

### API challenge

I did create an API access for the application. Wanna try to use data-driven testing to test it? Maybe send me a API? :)

## **GET**

- **URL**

  `/api/get-tax`

- **Method:**

  `GET`

- **URL Params**

  `state=[string]`

  `cost=[integer]`

  **Optional**

  `items=[integer]`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```js
    {
      "success": true,
      "cost": "2000",
      "state": "California",
      "items": "5",
      "taxPercentage": "7.25",
      "calculatedTax": "$725.00",
    }
    ```

- **Error Response:**

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```js
    {
        "success": false,
        "error": ""
    }
    ```

- **Sample Call:**

`https://tax-by-state.vercel.app/api/get-tax?cost=2000&state=California`

`https://tax-by-state.vercel.app/api/get-tax?cost=2000&state=California&items=5`
