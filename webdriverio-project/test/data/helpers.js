/* eslint @typescript-eslint/no-var-requires: "off" */
const excelToJson = require("convert-excel-to-json");
const csv = require("csv-tools");
const fs = require("fs");
const path = require("path");

const getTestDataExcel = () => {
  const testData = excelToJson({
    sourceFile: "./data/Test Data - Calculate Tax by State.xlsx",
    columnToKey: {
      A: "stateName",
      B: "stateTax",
      C: "itemCost",
      D: "numberOfItems",
      E: "expectedTax",
    },
  });
  return testData;
};

const getTestDataCSV = () => {
  const cvsData = fs
    .readFileSync(
      path.join(
        __dirname,
        "./Test Data - Calculate Tax by State - Test Data.csv"
      )
    )
    .toString("utf8");
  const testData = csv.toJSON(cvsData);
  return testData;
};

module.exports = { getTestDataExcel, getTestDataCSV };
