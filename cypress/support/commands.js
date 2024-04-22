// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const AdmZip = require('adm-zip');

Cypress.Commands.add('zipFolder', (folderPath, zipFilePath) => {
    const zip = new AdmZip();
    zip.addLocalFolder(folderPath);
    zip.writeZip(zipFilePath);
});

Cypress.Commands.add('unzipFile', (zipFilePath, outputFolder) => {
    const zip = new AdmZip(zipFilePath);
    zip.extractAllTo(outputFolder, true);
});
