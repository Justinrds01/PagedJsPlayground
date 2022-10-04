// import { exec } from "child_process";
// import pdf from "html-pdf";
import fs from "fs-extra";
import { v4 as uuid } from "uuid";
import puppeteer from "puppeteer";
import httpServer from "http-server";
import jsDom from "jsdom";
// html processing: add unique id's to all elements
const html = await fs.promises.readFile("index.html", "utf8");
const dom = new jsDom.JSDOM(html);
const { document } = dom.window;
const elements = document.querySelectorAll("*");
elements.forEach((element) => {
  element.setAttribute("id", `abb-${uuid()}`);
});
const htmlWithIds = dom.serialize();
// write html to file
await fs.promises.writeFile("index.html", htmlWithIds);

const __dirname = process.cwd();
console.log("dir: " + __dirname);
const server = httpServer.createServer({ root: __dirname });
server.listen(8080, async () => {
  console.log("Server is running on port 8080");
  // server is running so puppeteer can do its thing
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // navigate to local html file
  await page.goto("http://localhost:8080", {
    waitUntil: "networkidle2",
  });
  await page.pdf({
    path: "result.pdf",
    format: "A4",
    printBackground: true,
  });
  // close the browser and stop the server
  await browser.close();
  server.close();
  console.log("Server is closed");
});

export {};
