declare namespace Cypress {
    interface Chainable<Subject> {
        zipFolder(folderPath: any, zipFilePath: any): Chainable<any>
        unzipFile(zipFilePath: any, outputFolder: any): Chainable<any>
  }
}