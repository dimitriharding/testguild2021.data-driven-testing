/// <reference types="cypress" />

const calculatorPage = require("../../pages/calculator.page");
const states = require("../../data/states");
const testData = require("../fixtures/testData");

describe("Calculate Tax by State", () => {
  before(() => {
    cy.visit(calculatorPage.url);
  });

  afterEach(() => {
    cy.reload();
  });

  states.forEach((state, stateIndex) => {
    const stateTestData = testData.filter((data) => data.stateName === state);

    describe(state, () => {
      stateTestData.forEach(({ itemCost, numberOfItems, expectedTax }) => {
        it(
          numberOfItems
            ? `Should calculate the tax for multiple items correctly`
            : `Should calculate the tax for a single item correctly`,
          () => {
            cy.get("select").select(`${stateIndex}`);
            cy.get(calculatorPage.costInputSelector).type(itemCost);
            if (numberOfItems) {
              cy.get(calculatorPage.multipleItemsSelector).click();
              cy.get(calculatorPage.itemAmountInputSelector).type(
                numberOfItems
              );
            }
            cy.get(calculatorPage.displayMainSelector).then(($element) => {
              expect($element.text()).to.equal(expectedTax);
            });
          }
        );
      });
    });
  });
});
