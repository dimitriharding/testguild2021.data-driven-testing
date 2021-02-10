const excelToJson = require("convert-excel-to-json");
const csv = require("csv-tools");
const fs = require("fs");

function getTestDataExcel() {
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
}

function getTestDataCSV() {
  const csvData = fs
    .readFileSync("./data/Test Data - Calculate Tax by State - Test Data.csv")
    .toString("utf-8");

  const testData = csv.toJSON(csvData);
  return testData;
}

getTestDataCSV();

module.exports = { getTestDataExcel, getTestDataCSV };
