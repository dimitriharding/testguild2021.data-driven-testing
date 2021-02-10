const calculatorPage = require("../pages/calculator.page");
const { getTestDataCSV } = require("../data/helpers");
const testData = getTestDataCSV();

describe("Calculate Tax by State", () => {
  before((client) => {
    client.fullscreenWindow();
  });

  testData.forEach(({ stateName, itemCost, numberOfItems, expectedTax }) => {
    context(stateName, () => {
      test(
        numberOfItems
          ? `Should calculate the tax for a single item correctly [${stateName}]`
          : `Should calculate the tax for multiple items correctly [${stateName}]`,
        (client) => {
          client
            .url(calculatorPage.url)
            .click(calculatorPage.getStateSelector(stateName))
            .setValue(calculatorPage.costInputSelector, `${itemCost}`);
          if (numberOfItems) {
            client
              .click(calculatorPage.multipleItemsSelector)
              .setValue(
                calculatorPage.itemAmountInputSelector,
                `${numberOfItems}`
              );
          }
          client.verify.containsText(
            calculatorPage.displayMainSelector,
            expectedTax,
            numberOfItems
              ? `Verified that ${stateName} tax is correct for a single item`
              : `Verified that ${stateName} tax is correct for multiple items`
          );
        }
      );
    });
  });
});
