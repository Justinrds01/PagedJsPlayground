// import { exec } from "child_process";
// import pdf from "html-pdf";
import fs from "fs";
import { exec, spawn, execFile } from "child_process";
import puppeteer from "puppeteer";
import httpServer from "http-server";

// Problem: Toc script should be executed before paged js script
/*
    Steps:
    1. Start http server to serve the html file
    2. Open the html file in the headless browser
    3. Make the pdf
    4. Stop the http server
*/
const __dirname = process.cwd();
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
