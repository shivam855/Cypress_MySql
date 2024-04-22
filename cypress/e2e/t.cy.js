// const xlsx = require("xlsx");
// const BASv2Urls = {
//   BASv2_Url_1: {
//     BASEnPageTime: "Content page bookmarks and links",
//     BASEnUrl:
//       "https://buyandsell.gc.ca/procurement-data/content-page-bookmarks-and-links",
//     CanadaBuysUrlEn: "https://canadabuys.canada.ca/en/tender-opportunities",
//     CanadaBuysEnPageTitle: "Tender Opportunities",
//     BASFnPageTime: "Content page bookmarks and links",
//     BASFnUrl:
//       "https://beta.buyandsell.gc.ca/procurement-data/content-page-bookmarks-and-links",
//     CanadaBuysUrlFn: "https://canadabuys.canada.ca/en/tender-opportunities",
//     CanadaBuysFnPageTitle: "Tender opportunities",
//   },
//   // BASv2_Url_2: []
// };

// describe.skip("BASv2 Url Redirection", { testIsolation: false }, () => {
//   let workbook = xlsx.utils.book_new();
//   let worksheet = xlsx.utils.json_to_sheet([{ "Test Name": "Result" }], {
//     header: ["Test Name", "Result"],
//     skipHeader: true,
//   });
//   Object.keys(BASv2Urls).forEach((BASv2Url) => {
//     it(`Validate the title of the page and the redirection from industial page to canada buys url for ${BASv2Url}`, () => {
//       console.log(BASv2Url);
//       cy.origin(
//         "https://canadabuys.canada.ca",
//         { args: { BASv2Url, BASv2Urls } },
//         ({ BASv2Url, BASv2Urls }) => {
//           cy.visit(BASv2Urls[BASv2Url].CanadaBuysUrlEn);
//         }
//       );
//       cy.visit(BASv2Urls[BASv2Url].BASEnUrl);
//       cy.get("h1#cont").should(
//         "contain.text",
//         BASv2Urls[BASv2Url].BASEnPageTime
//       );
//       cy.get("a").contains(BASv2Urls[BASv2Url].CanadaBuysEnPageTitle).click();
//     });
//     it(`Validate the title of the page and the redirection from industial page to canada buys url for ${BASv2Url}`, () => {
//       cy.location().should((urls) => {
//         expect(BASv2Urls[BASv2Url].CanadaBuysUrlEn).to.contains(urls.href);
//       });
//       cy.get("h1.page-title-block__title").should((text) => {
//         expect(
//           BASv2Urls[BASv2Url].CanadaBuysEnPageTitle.toLowercase()
//         ).to.contains(text.text().toLowercase());
//       });
//       // });
//       cy.on("test:after:run", (test, runnable) => {
//         let row = { "Test Name": test.title, Result: test.state };
//         xlsx.utils.sheet_add_json(worksheet, [row], {
//           skipHeader: true,
//           origin: -1,
//         });
//       });
//     });
//     after(() => {
//       xlsx.utils.book_append_sheet(workbook, worksheet, "Results");
//       xlsx.writeFile(workbook, "TestResults.xlsx");
//     });
//   });
// });
// describe.only("BASv2 Url Redirection", { testIsolation: false }, () => {
//   it("click on OK button in alert during completing the visit", () => {
//     cy.on("uncaught:exception", (err) => {
//       return false;
//     });
//     cy.visit("https://buyandsell.gc.ca");
//     cy.intercept("GET", "https://canada.sc.omtrdc.net/**").as(`${url}API`);
    
//     cy.get("a[href^='https://buyandsell']").each((a, index) => {
//       const url = a.prop("href");

//       cy.visit(`${url}?logdtm=1`, {
//         onBeforeLoad(win) {
//           win.console.clear();
//           cy.on("window:confirm", () => true);
//           cy.stub(win.console, 'log').as(url)
//         }
//       })
//       cy.wait(2000);
//       cy.get(`@${url}`).should('be.calledWithMatch', /ADOBE ANALYTICS PAGE LOAD/);
//       cy.get(`@${url}API`).then(res => {
        
//       })
//     });
//   });
// });

describe.skip("BASv2 Url Redirection", { testIsolation: false }, () => {
  it('hi', () => {
    cy.zipFolder('../fixtures/fold', '../downloads/fold.zip');
    // cy.unzipFile('path/to/your/input.zip', 'path/to/your/output/folder');
  })
});


describe.skip("BASv2 Url Redirection", { testIsolation: false }, () => {
  it('hi', () => {
    // cy.zipFolder('../fixtures/fold', '../downloads/fold.zip');
    cy.unzipFile('../downloads/fold.zip', '../feature/fold.zip');
  })
});