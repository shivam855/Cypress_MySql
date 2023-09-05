const { defineConfig } = require("cypress");
const mysql = require("mysql");
const csv = require("@fast-csv/parse");
const { writeToPath } = require("@fast-csv/format");
const fs = require("fs");
const xlsx = require("xlsx");

module.exports = defineConfig({
  env: {
    db1: {
      server: "127.0.0.1",
      user: "root",
      password: "mysql@123",
      database: "learn",
    },
    db2: {
      server: "127.0.0.1",
      user: "root",
      password: "mysql@123",
      database: "bike",
    }
  },

  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        queryDb: (query) => {
          return queryTestDb(query.query, config, query.db);
        },
      });
      on("task", {
        readFromCsv() {
          return new Promise((resolve, reject) => {
            let results = [];
            csv
              .parseFile("cypress/fixtures/employe.csv", { headers: false })
              .on("error", (error) => reject(error))
              .on("data", (row) => results.push(row))
              .on("end", () => resolve(results));
          });
        },
      });
      on("task", {
        writeToCSV({name, rows}) {
          writeToPath(`./cypress/fixtures/${name}.xlsx`, rows, { headers: true }, { flag: 'a+' });
          return null;
        }
      });
      on("task", {
        writeToXlsx,
      });
    },
  },
});


function writeToXlsx({ name, rows }) {
  const filename = `${name}.xlsx`;
  const sheetName = "Sheet1";
  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet(rows);
  xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
  const buffer = xlsx.write(workbook, { type: "buffer" });
  fs.writeFileSync(filename, buffer);
  return null;
}

function queryTestDb(query, config, db) {
  const connection = mysql.createConnection(config.env[db]);
  connection.connect();
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        connection.end();
        resolve(results);
      }
    });
  });
}
