/* eslint-disable no-undef */
/* eslint @typescript-eslint/no-var-requires: "off" */

const calculatorPage = require("../pages/calculator.page");

describe("Calculate Tax by State", () => {
  before((client) => {
    client.fullscreenWindow();
  });

  context("Alabama", () => {
    test("Should calculate the tax for a single item correctly [Alabama]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(0))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$80.00",
          "Verified that Alabama tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Alabama]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(0))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$400.00",
          "Verified that Alabama tax tax is correct for multiple items"
        );
    });
  });

  context("Alaska", () => {
    test("Should calculate the tax for a single item correctly [Alaska]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(1))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$0.00",
          "Verified that Alaska tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Alaska]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(1))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$0.00",
          "Verified that Alaska tax tax is correct for multiple items"
        );
    });
  });

  context("Arizona", () => {
    test("Should calculate the tax for a single item correctly [Arizona]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(2))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$112.00",
          "Verified that Arizona tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Arizona]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(2))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$560.00",
          "Verified that Arizona tax tax is correct for multiple items"
        );
    });
  });

  context("Arkansas", () => {
    test("Should calculate the tax for a single item correctly [Arkansas]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(3))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$130.00",
          "Verified that Arkansas tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Arkansas]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(3))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$650.00",
          "Verified that Arkansas tax tax is correct for multiple items"
        );
    });
  });

  context("California", () => {
    test("Should calculate the tax for a single item correctly [California]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(4))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$145.00",
          "Verified that California tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [California]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(4))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$725.00",
          "Verified that California tax tax is correct for multiple items"
        );
    });
  });

  context("Colorado", () => {
    test("Should calculate the tax for a single item correctly [Colorado]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(5))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$58.00",
          "Verified that Colorado tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Colorado]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(5))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$290.00",
          "Verified that Colorado tax tax is correct for multiple items"
        );
    });
  });

  context("Connecticut", () => {
    test("Should calculate the tax for a single item correctly [Connecticut]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(6))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$127.00",
          "Verified that Connecticut tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Connecticut]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(6))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$635.00",
          "Verified that Connecticut tax tax is correct for multiple items"
        );
    });
  });

  context("Delaware", () => {
    test("Should calculate the tax for a single item correctly [Delaware]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(7))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$0.00",
          "Verified that Delaware tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Delaware]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(7))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$0.00",
          "Verified that Delaware tax tax is correct for multiple items"
        );
    });
  });

  context("District of Columbia", () => {
    test("Should calculate the tax for a single item correctly [District of Columbia]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(8))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$120.00",
          "Verified that District of Columbia tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [District of Columbia]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(8))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$600.00",
          "Verified that District of Columbia tax tax is correct for multiple items"
        );
    });
  });

  context("Florida", () => {
    test("Should calculate the tax for a single item correctly [Florida]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(9))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$120.00",
          "Verified that Florida tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Florida]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(9))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$600.00",
          "Verified that Florida tax tax is correct for multiple items"
        );
    });
  });

  context("Georgia", () => {
    test("Should calculate the tax for a single item correctly [Georgia]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(10))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$80.00",
          "Verified that Georgia tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Georgia]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(10))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$400.00",
          "Verified that Georgia tax tax is correct for multiple items"
        );
    });
  });

  context("Hawaii", () => {
    test("Should calculate the tax for a single item correctly [Hawaii]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(11))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$80.00",
          "Verified that Hawaii tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Hawaii]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(11))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$400.00",
          "Verified that Hawaii tax tax is correct for multiple items"
        );
    });
  });

  context("Idaho", () => {
    test("Should calculate the tax for a single item correctly [Idaho]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(12))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$120.00",
          "Verified that Idaho tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Idaho]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(12))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$600.00",
          "Verified that Idaho tax tax is correct for multiple items"
        );
    });
  });

  context("Illinois", () => {
    test("Should calculate the tax for a single item correctly [Illinois]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(13))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$125.00",
          "Verified that Illinois tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Illinois]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(13))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$625.00",
          "Verified that Illinois tax tax is correct for multiple items"
        );
    });
  });

  context("Indiana", () => {
    test("Should calculate the tax for a single item correctly [Indiana]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(14))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$140.00",
          "Verified that Indiana tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Indiana]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(14))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$700.00",
          "Verified that Indiana tax tax is correct for multiple items"
        );
    });
  });

  context("Iowa", () => {
    test("Should calculate the tax for a single item correctly [Iowa]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(15))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$120.00",
          "Verified that Iowa tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Iowa]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(15))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$600.00",
          "Verified that Iowa tax tax is correct for multiple items"
        );
    });
  });

  context("Kansas", () => {
    test("Should calculate the tax for a single item correctly [Kansas]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(16))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$130.00",
          "Verified that Kansas tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Kansas]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(16))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$650.00",
          "Verified that Kansas tax tax is correct for multiple items"
        );
    });
  });

  context("Kentucky", () => {
    test("Should calculate the tax for a single item correctly [Kentucky]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(17))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$120.00",
          "Verified that Kentucky tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Kentucky]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(17))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$600.00",
          "Verified that Kentucky tax tax is correct for multiple items"
        );
    });
  });

  context("Louisiana", () => {
    test("Should calculate the tax for a single item correctly [Louisiana]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(18))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$89.00",
          "Verified that Louisiana tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Louisiana]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(18))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$445.00",
          "Verified that Louisiana tax tax is correct for multiple items"
        );
    });
  });

  context("Maine", () => {
    test("Should calculate the tax for a single item correctly [Maine]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(19))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$110.00",
          "Verified that Maine tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Maine]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(19))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$550.00",
          "Verified that Maine tax tax is correct for multiple items"
        );
    });
  });

  context("Maryland", () => {
    test("Should calculate the tax for a single item correctly [Maryland]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(20))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$120.00",
          "Verified that Maryland tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Maryland]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(20))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$600.00",
          "Verified that Maryland tax tax is correct for multiple items"
        );
    });
  });

  context("Massachusetts", () => {
    test("Should calculate the tax for a single item correctly [Massachusetts]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(21))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$125.00",
          "Verified that Massachusetts tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Massachusetts]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(21))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$625.00",
          "Verified that Massachusetts tax tax is correct for multiple items"
        );
    });
  });

  context("Michigan", () => {
    test("Should calculate the tax for a single item correctly [Michigan]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(22))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$120.00",
          "Verified that Michigan tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Michigan]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(22))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$600.00",
          "Verified that Michigan tax tax is correct for multiple items"
        );
    });
  });

  context("Minnesota", () => {
    test("Should calculate the tax for a single item correctly [Minnesota]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(23))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$137.50",
          "Verified that Minnesota tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Minnesota]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(23))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$687.50",
          "Verified that Minnesota tax tax is correct for multiple items"
        );
    });
  });

  context("Mississippi", () => {
    test("Should calculate the tax for a single item correctly [Mississippi]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(24))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$140.00",
          "Verified that Mississippi tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Mississippi]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(24))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$700.00",
          "Verified that Mississippi tax tax is correct for multiple items"
        );
    });
  });

  context("Missouri", () => {
    test("Should calculate the tax for a single item correctly [Missouri]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(25))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$84.50",
          "Verified that Missouri tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Missouri]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(25))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$422.50",
          "Verified that Missouri tax tax is correct for multiple items"
        );
    });
  });

  context("Montana", () => {
    test("Should calculate the tax for a single item correctly [Montana]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(26))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$0.00",
          "Verified that Montana tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Montana]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(26))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$0.00",
          "Verified that Montana tax tax is correct for multiple items"
        );
    });
  });

  context("Nebraska", () => {
    test("Should calculate the tax for a single item correctly [Nebraska]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(27))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$110.00",
          "Verified that Nebraska tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Nebraska]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(27))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$550.00",
          "Verified that Nebraska tax tax is correct for multiple items"
        );
    });
  });

  context("Nevada", () => {
    test("Should calculate the tax for a single item correctly [Nevada]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(28))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$137.00",
          "Verified that Nevada tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Nevada]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(28))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$685.00",
          "Verified that Nevada tax tax is correct for multiple items"
        );
    });
  });

  context("New Hampshire", () => {
    test("Should calculate the tax for a single item correctly [New Hampshire]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(29))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$0.00",
          "Verified that New Hampshire tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [New Hampshire]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(29))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$0.00",
          "Verified that New Hampshire tax tax is correct for multiple items"
        );
    });
  });

  context("New Jersey", () => {
    test("Should calculate the tax for a single item correctly [New Jersey]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(30))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$132.50",
          "Verified that New Jersey tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [New Jersey]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(30))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$662.50",
          "Verified that New Jersey tax tax is correct for multiple items"
        );
    });
  });

  context("New Mexico", () => {
    test("Should calculate the tax for a single item correctly [New Mexico]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(31))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$102.50",
          "Verified that New Mexico tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [New Mexico]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(31))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$512.50",
          "Verified that New Mexico tax tax is correct for multiple items"
        );
    });
  });

  context("New York", () => {
    test("Should calculate the tax for a single item correctly [New York]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(32))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$80.00",
          "Verified that New York tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [New York]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(32))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$400.00",
          "Verified that New York tax tax is correct for multiple items"
        );
    });
  });

  context("North Carolina", () => {
    test("Should calculate the tax for a single item correctly [North Carolina]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(33))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$95.00",
          "Verified that North Carolina tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [North Carolina]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(33))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$475.00",
          "Verified that North Carolina tax tax is correct for multiple items"
        );
    });
  });

  context("North Dakota", () => {
    test("Should calculate the tax for a single item correctly [North Dakota]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(34))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$100.00",
          "Verified that North Dakota tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [North Dakota]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(34))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$500.00",
          "Verified that North Dakota tax tax is correct for multiple items"
        );
    });
  });

  context("Ohio", () => {
    test("Should calculate the tax for a single item correctly [Ohio]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(35))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$115.00",
          "Verified that Ohio tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Ohio]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(35))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$575.00",
          "Verified that Ohio tax tax is correct for multiple items"
        );
    });
  });

  context("Oklahoma", () => {
    test("Should calculate the tax for a single item correctly [Oklahoma]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(36))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$90.00",
          "Verified that Oklahoma tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Oklahoma]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(36))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$450.00",
          "Verified that Oklahomatax tax is correct for multiple items"
        );
    });
  });

  context("Oregon", () => {
    test("Should calculate the tax for a single item correctly [Oregon]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(37))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$0.00",
          "Verified that Oregon tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Oregon]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(37))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$0.00",
          "Verified that Oregon tax is correct for multiple items"
        );
    });
  });

  context("Pennsylvania", () => {
    test("Should calculate the tax for a single item correctly [Pennsylvania]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(38))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$120.00",
          "Verified that Pennsylvania tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Pennsylvania]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(38))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$600.00",
          "Verified that Pennsylvania tax is correct for multiple items"
        );
    });
  });

  context("Puerto Rico", () => {
    test("Should calculate the tax for a single item correctly [Puerto Rico]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(39))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$230.00",
          "Verified that Puerto Rico tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Puerto Rico]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(39))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$1,150.00",
          "Verified that Puerto Rico tax is correct for multiple items"
        );
    });
  });

  context("Rhode Island", () => {
    test("Should calculate the tax for a single item correctly [Rhode Island]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(40))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$140.00",
          "Verified that Rhode Island tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Rhode Island]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(40))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$700.00",
          "Verified that Rhode Island tax is correct for multiple items"
        );
    });
  });

  context("South Carolina", () => {
    test("Should calculate the tax for a single item correctly [South Carolina]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(41))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$120.00",
          "Verified that South Carolina  tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [South Carolina]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(41))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$600.00",
          "Verified that South Carolina tax is correct for multiple items"
        );
    });
  });

  context("South Dakota", () => {
    test("Should calculate the tax for a single item correctly [South Dakota]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(42))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$90.00",
          "Verified that South Dakota tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [South Dakota]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(42))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$450.00",
          "Verified that South Dakota tax is correct for multiple items"
        );
    });
  });

  context("Tennessee", () => {
    test("Should calculate the tax for a single item correctly [Tennessee]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(43))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$140.00",
          "Verified that Tennessee tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Tennessee]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(43))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$700.00",
          "Verified that Tennessee tax is correct for multiple items"
        );
    });
  });

  context("Texas", () => {
    test("Should calculate the tax for a single item correctly [Texas]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(44))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$125.00",
          "Verified that Texas tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Texas]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(44))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$625.00",
          "Verified that Texas tax is correct for multiple items"
        );
    });
  });

  context("Utah", () => {
    test("Should calculate the tax for a single item correctly [Utah]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(45))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$97.00",
          "Verified that Utah tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Utah]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(45))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$485.00",
          "Verified that Utah tax is correct for multiple items"
        );
    });
  });

  context("Vermont", () => {
    test("Should calculate the tax for a single item correctly [Vermont]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(46))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$120.00",
          "Verified that Vermont tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Vermont]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(46))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$600.00",
          "Verified that Vermont tax is correct for multiple items"
        );
    });
  });

  context("Virginia", () => {
    test("Should calculate the tax for a single item correctly [Virginia]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(47))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$86.00",
          "Verified that Virginia tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Virginia]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(47))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$430.00",
          "Verified that Virginia tax is correct for multiple items"
        );
    });
  });

  context("Washington", () => {
    test("Should calculate the tax for a single item correctly [Washington]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(48))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$130.00",
          "Verified that Washington tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Washington]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(48))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$650.00",
          "Verified that Washington tax is correct for multiple items"
        );
    });
  });

  context("West Virginia", () => {
    test("Should calculate the tax for a single item correctly [West Virginia]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(49))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$120.00",
          "Verified that West Virginia tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [West Virginia]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(49))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$600.00",
          "Verified that West Virginia tax is correct for multiple items"
        );
    });
  });

  context("Wisconsin", () => {
    test("Should calculate the tax for a single item correctly [Wisconsin]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(50))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$100.00",
          "Verified that Wisconsin tax is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Wisconsin]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(50))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$500.00",
          "Verified that Wisconsin tax is correct for multiple items"
        );
    });
  });

  context("Wyoming", () => {
    test("Should calculate the tax for a single item correctly [Wyoming]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(51))
        .setValue(calculatorPage.costInputSelector, "2000")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$80.00",
          "Verified that Wyoming is correct for a single item"
        );
    });
    test("Should calculate the tax for multiple items correctly [Wyoming]", (client) => {
      client
        .url(calculatorPage.url)
        .click(calculatorPage.getStateSelector(51))
        .setValue(calculatorPage.costInputSelector, "2000")
        .click(calculatorPage.multipleItemsSelector)
        .setValue(calculatorPage.itemAmountInputSelector, "5")
        .verify.containsText(
          calculatorPage.displayMainSelector,
          "$400.00",
          "Verified that Wyoming tax is correct for multiple items"
        );
    });
  });
});

