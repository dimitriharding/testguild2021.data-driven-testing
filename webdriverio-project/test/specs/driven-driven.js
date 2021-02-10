/* eslint-disable no-undef */
/* eslint @typescript-eslint/no-var-requires: "off" */

const { getTestDataCSV } = require("../data/helpers");

const testData = getTestDataCSV();
const states = require("../data/states");
const calculatorPage = require("../pageObjects/calculator.page.js");

describe("Calculate Tax by State", () => {
  states.forEach((state) => {
    const stateTestData = testData.filter((data) => data.stateName === state);

    describe(state, () => {
      stateTestData.forEach(({ itemCost, numberOfItems, expectedTax }) => {
        it(`${
          numberOfItems
            ? "Should calculate tax for multiple items correctly"
            : "Should calculate tax for a single item correctly"
        }`, () => {
          browser.url(calculatorPage.url);
          $(calculatorPage.getStateSelector(state)).click();
          $(calculatorPage.costInputSelector).setValue(itemCost);
          if (numberOfItems) {
            $(calculatorPage.multipleItemsSelector).click();
            $(calculatorPage.itemAmountInputSelector).setValue(numberOfItems);
          }
          expect($(calculatorPage.displayMainSelector)).toHaveText(expectedTax);
        });
      });
    });
  });
});
