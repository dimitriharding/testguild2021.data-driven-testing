/* eslint @typescript-eslint/no-var-requires: "off" */
const excelToJson = require('convert-excel-to-json')
const csv = require('csv-tools')
const fs = require('fs')

const getTestDataExcel = () => {
  const testData = excelToJson({
    sourceFile: './data/Test Data - Calculate Tax by State.xlsx',
    columnToKey: {
      A: 'stateName',
      B: 'stateTax',
      C: 'itemCost',
      D: 'numberOfItems',
      E: 'expectedTax',
    },
  })
  return testData
}

const getTestDataCSV = () => {
  const cvsData = fs
    .readFileSync(
      '/Users/dimitriharding/Documents/projects/personal/us-tax-calculator/data-driven-testing/webdriverio/test/data/Test Data - Calculate Tax by State - Test Data.csv'
    )
    .toString('utf8')
  const testData = csv.toJSON(cvsData)
  return testData
}

module.exports = { getTestDataExcel, getTestDataCSV }
