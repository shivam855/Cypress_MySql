import * as JSZip from "jszip";
import * as fs from "fs";
describe("BASv2 Url Redirection", { testIsolation: false }, () => {
  it("hi", () => {
    async function zipFolder() {
      const zip = new JSZip();
      zip.folder("../zip");
      const zipFile = await zip.generateAsync({ type: "nodebuffer" });
      fs.writeFileSync("my-zip-file.zip", zipFile);
    }

    zipFolder();
  });
});
