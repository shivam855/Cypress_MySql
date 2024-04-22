/// <reference types="cypress" />
import JSZip from "jszip";

// let path = "cypress/fixtures/";
// let file = "example.zip";

describe.skip("example unzip", () => {
  it("make the test", () => {
    cy.task("unzipping", { path, file });
  });
});
describe("example zip", () => {
  it("make the test", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    var zip = new JSZip();

    // Add an top-level, arbitrary text file with contents
    zip.file("Hello.txt", "Hello World\n");

    // Generate a directory within the Zip file structure
    var img = zip.folder("images");

    // Add a file to the directory, in this case an image with data URI as contents
    img.file("smile.gif", "../fixtures/unzip/example/example.json", { base64: true });

    // Generate the zip file asynchronously
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // Force down of the Zip file
      saveAs(content, "archive.zip");
    });
    const folderPath = "../fixtures/unzip";
    const zipFilePath = "../fixtures/unzip.zip";
    // zipFolder(folderPath, zipFilePath);
  });
});
