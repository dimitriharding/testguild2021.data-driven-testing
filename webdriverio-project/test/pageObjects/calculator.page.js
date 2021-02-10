/* eslint @typescript-eslint/no-var-requires: "off" */
const listOfStates = require('../data/states')

class CalculatorPage {
  constructor() {
    this.title = 'Calculate Tax By State'
  }

  // Selector getters
  get costInputSelector() {
    return 'input[name="cost"]'
  }
  get itemAmountInputSelector() {
    return 'input[name="items"]'
  }
  get multipleItemsSelector() {
    return `[role=radiogroup] label:nth-child(2)`
  }
  get displayMainSelector() {
    return '#display-main'
  }
  get url() {
    return 'https://tax-by-state.vercel.app'
  }

  // Methods
  getStateSelector(indexOrName) {
    const actualIndex =
      typeof indexOrName === 'string'
        ? listOfStates.indexOf(indexOrName)
        : indexOrName
    return `select[name=state] option[value="${actualIndex}"]`
  }
}

const calculatorPage = new CalculatorPage()

module.exports = calculatorPage
