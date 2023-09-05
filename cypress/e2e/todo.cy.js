/// <reference types="cypress" />

describe("example to-do app", () => {
  it.only("add data from 2 db and store into excel", () => {
    let combinedResults = [];
    cy.task("queryDb", {db: "db1",query: "SELECT * FROM learn.student;" }).then((result1) => {
      cy.task("queryDb", { db: "db2", query: "select * from bike.eng;" }).then((result2) => {
          const combinedResults = [];
          const allKeys = new Set([
            ...Object.keys(result1),
            ...Object.keys(result2),
          ]);
          allKeys.forEach((key) => {
            const value1 = result1[key] || {};
            const value2 = result2[key] || {};
            const combinedValue = { ...value1, ...value2 };
            combinedResults.push(combinedValue);
          });
          console.log(combinedResults);
          cy.task("writeToCSV", { name: "learn1", rows: combinedResults });
          cy.task("writeToXlsx", { name: "learn1", rows: combinedResults });
        }
      );
    });
  });

  it.skip("displays csv data", () => {
    cy.task("readFromCsv").then((result) => {
      cy.log(result);
    });
  });

  it.skip("add data into csv", () => {
    cy.task("writeToCSV", { name: "DB", rows: [{ Id: "3" }] }).then(
      (result) => {
        cy.log(result);
      }
    );
  });
});
