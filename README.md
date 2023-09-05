# Cypress_MySql

npm i cypress

npm i mysql -D

const mysql = require("mysql");

env: {
    db: {
      server: "127.0.0.1",
      user : "root",	
      password : "mysql@123",
      database : "learn"
    }
  },
  
   on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config);
        }
      })
	  
	  function queryTestDb(query, config) {
  const connection = mysql.createConnection(config.env.db);
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

--> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql@123'

--> flush privileges


/// <reference types="cypress" />

describe('example to-do app', () => {

  it('displays two todo items by default', () => {
    cy.task('queryDb', 'SELECT * FROM learn.student').then((result) => {
      console.log(result);
      cy.log(Object.values(result[0]));
    });
  })
})
